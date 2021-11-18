import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameWorld } from './world.entity';
import { WorldsController } from './worlds.controller';
import { WorldsService } from './worlds.service';

@Module({
  imports: [TypeOrmModule.forFeature([GameWorld])],
  providers: [WorldsService],
  controllers: [WorldsController],
  exports: [TypeOrmModule],
})
export class WorldsModule {}
