import { Module } from '@nestjs/common';
import { WorldsController } from './worlds/worlds.controller';
import { WorldsService } from './worlds/worlds.service';
import { GuildsService } from './guilds/guilds.service';
import { GuildsController } from './guilds/guilds.controller';
import { CharactersService } from './characters/characters.service';
import { CharactersController } from './characters/characters.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { WorldsModule } from './worlds/worlds.module';
import Database from './infrastructure/database';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: Database.connectionOptions,
    }),
    WorldsModule,
  ],
  controllers: [WorldsController],
  providers: [WorldsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
