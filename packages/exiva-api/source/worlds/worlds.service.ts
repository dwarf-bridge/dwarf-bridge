import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameWorld } from '../../../core/source/world.entity';

@Injectable()
export class WorldsService {
  constructor(
    @InjectRepository(GameWorld)
    private readonly worldsRepository: Repository<GameWorld>,
  ) {}
}
