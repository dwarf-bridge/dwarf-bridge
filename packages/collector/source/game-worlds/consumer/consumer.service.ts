import { Logger } from '@nestjs/common';
import {
  Processor as QueueConsumer,
  Process,
  OnQueueActive,
  OnQueueError,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Job } from 'bull';
import { Collector } from '../collector/collector.service';
import { Processor } from '../processor/processor.service';
import { Parser } from '../parser/parser.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameWorld } from '../../../../core/source/world.entity';
import { ConfigService } from '@nestjs/config';
import { Job as JobName, Queue } from '../../config';

@QueueConsumer({
  name: Queue.EXECUTION_QUEUE,
})
export class Consumer {
  private readonly logger = new Logger(`Game Worlds:${Consumer.name}`);

  constructor(
    private config: ConfigService,
    private collector: Collector,
    private processor: Processor,
    private parser: Parser,
    @InjectRepository(GameWorld)
    private readonly repository: Repository<GameWorld>,
  ) {}

  @Process(JobName.GAME_WORLD_CHECK)
  async transcode(job: Job<unknown>) {
    const schema = this.config.get('TYPEORM_SCHEMA');
    this.logger.log(job.data);

    const response = await this.collector.collect();
    response.subscribe(async (response) => {
      const raw_content = this.processor
        .init(response.data)
        .handle()
        .get_content();

      const { regular_worlds, tournament_worlds } = this.parser
        .init(raw_content)
        .handle()
        .get_content();

      const worlds = [
        ...regular_worlds.map((world) => {
          return { ...world, is_special_world: false };
        }),
        ...tournament_worlds.map((world) => {
          return { ...world, is_special_world: true };
        }),
      ];

      try {
        await this.repository
          .createQueryBuilder()
          .insert()
          .into(`${schema}.game_worlds`)
          .values(worlds)
          .orUpdate(
            ['server_titles', 'server_conditions', 'creation_date'],
            ['name'],
          )
          .execute();
      } catch (err) {
        this.logger.error(err);
      }
    });
  }

  @OnQueueActive({ name: JobName.GAME_WORLD_CHECK })
  onActive(job: Job) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} with data ${JSON.stringify(
        job.data,
      )}...`,
    );
  }

  @OnQueueError({ name: JobName.GAME_WORLD_CHECK })
  onError(job: Job) {
    this.logger.error(job);
  }

  @OnQueueCompleted({ name: JobName.GAME_WORLD_CHECK })
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} of type ${job.name} was completed`);
  }
}
