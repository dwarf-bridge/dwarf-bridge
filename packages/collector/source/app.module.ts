import { Module } from '@nestjs/common';
import { OnlineCheckService } from './online-check/online-check.service';
import { BullModule } from '@nestjs/bull';
import { RankingService } from './ranking/ranking.service';
import { GameWorldsService } from './game-worlds/game-worlds.service';

@Module({
  imports: [
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
        max: 2,
        duration: 450,
      },
    }),
  ],
  controllers: [],
  providers: [OnlineCheckService, RankingService, GameWorldsService],
})
export class AppModule {}
