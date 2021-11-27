import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { Queue } from 'bull';
import { Job, Queue as QueueName } from '../../../core/source/config';

@Injectable()
export class TimeGuardianService {
  private readonly logger = new Logger(TimeGuardianService.name);

  constructor(@InjectQueue(QueueName.EXECUTION_QUEUE) private queue: Queue) {}

  @Timeout(100)
  async handle_initial_worlds() {
    this.logger.log(`Emiting initial game_worlds checking`);
    await this.queue.add(
      Job.GAME_WORLD_CHECK,
      {},
      {
        removeOnComplete: true,
        priority: 1,
      },
    );
  }

  @Cron(CronExpression.EVERY_DAY_AT_9AM, { timeZone: 'America/Bahia' })
  async handle_game_worlds() {
    this.logger.log(`Emiting game_world checking`);
    await this.queue.add(
      Job.GAME_WORLD_CHECK,
      {},
      {
        removeOnComplete: true,
      },
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { timeZone: 'America/Bahia' })
  async handle_online_checks() {
    this.logger.log(`Emiting online players in game_world checking`);
    await this.queue.add(
      Job.ONLINE_PLAYERS_CHECK,
      {
        game_world: 'Nossobra',
      },
      {
        priority: 1,
        removeOnComplete: true,
      },
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { timeZone: 'America/Bahia' })
  async handle_hourly_rankings() {
    await Promise.all(
      Array.from(Array(20).keys()).map(async (key) => {
        await this.queue.add(
          Job.RANKING_CHECK,
          {
            world: 'Nossobra',
            page: key + 1,
            category: 6,
          },
          {
            priority: 3,
            removeOnComplete: true,
          },
        );
        this.logger.log(`Emit ranking page #${key + 1} for Nossobra`);
      }),
    );
  }
}
