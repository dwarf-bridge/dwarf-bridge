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
export class RankingService {
  private readonly logger = new Logger(RankingService.name);

  @Process('RANKING_CHECK')
  async transcode(job: Job<unknown>) {
    this.logger.log(job.data);
  }

  @OnQueueActive({ name: 'RANKING_CHECK' })
  onActive(job: Job) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} with data ${JSON.stringify(
        job.data,
      )}...`,
    );
  }

  @OnQueueError({ name: 'RANKING_CHECK' })
  onError(job: Job) {
    this.logger.error(job);
  }

  @OnQueueCompleted({ name: 'RANKING_CHECK' })
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} of type ${job.name} was completed`);
  }
}
