import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Consumer } from './consumer/consumer.service';
import { Collector } from './collector/collector.service';
import { Processor } from './processor/processor.service';
import { Parser } from './parser/parser.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameWorld } from '../../../core/source/world.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([GameWorld]),
    HttpModule,
  ],
  providers: [Consumer, Collector, Processor, Parser],
})
export class GameWorldsModule {}
