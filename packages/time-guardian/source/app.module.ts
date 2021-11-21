import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TimeGuardianService } from './time-guardian/time-guardian.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
        password: '123',
      },
    }),
    BullModule.registerQueue({
      name: 'execution_queue',
      limiter: {
        duration: 200,
        max: 2,
      },
    }),
  ],
  controllers: [],
  providers: [TimeGuardianService],
})
export class AppModule {}
