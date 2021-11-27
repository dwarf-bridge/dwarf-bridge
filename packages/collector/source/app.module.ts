import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnlineCheckService } from './game-worlds/online-check/online-check.service';
import { RankingService } from './ranking/ranking.service';
import { GameWorldsModule } from './game-worlds/game-worlds.module';
import Database from './infrastructure/database';

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
    TypeOrmModule.forRootAsync({
      useFactory: Database.connectionOptions,
    }),
    GameWorldsModule,
  ],
  controllers: [],
  providers: [OnlineCheckService, RankingService],
})
export class AppModule {}
