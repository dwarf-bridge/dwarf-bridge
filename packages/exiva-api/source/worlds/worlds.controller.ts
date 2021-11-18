import { Controller, Get } from '@nestjs/common';
import { WorldsService } from './worlds.service';

@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Get()
  async findAll(): Promise<any> {
    return [];
  }
}
