import { Controller } from '@nestjs/common';
import { WorldsService } from './worlds.service';

@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}
}
