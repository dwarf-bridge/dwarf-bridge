import { Logger } from '@nestjs/common';
import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueError,
  OnQueueCompleted,
} from '@nestjs/bull';
import { Job } from 'bull';

@Processor({
  name: 'execution_queue',
})
export class Consumer {
  private readonly logger = new Logger(Consumer.name);

  @Process('GAME_WORLD_CHECK')
  async transcode(job: Job<unknown>) {
    this.logger.log(job.data);
  }

  @OnQueueActive({ name: 'GAME_WORLD_CHECK' })
  onActive(job: Job) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} with data ${JSON.stringify(
        job.data,
      )}...`,
    );
  }

  @OnQueueError({ name: 'GAME_WORLD_CHECK' })
  onError(job: Job) {
    this.logger.error(job);
  }

  @OnQueueCompleted({ name: 'GAME_WORLD_CHECK' })
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} of type ${job.name} was completed`);
  }
}
