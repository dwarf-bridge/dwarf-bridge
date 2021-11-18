import { Controller, Get, Param, Query } from '@nestjs/common';
@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Get()
  async findAll() {
  }

  @Get(':world')
  async findOne(@Param('world') world: string) {
  }
  @Get('online')
  findAllOnline(@Query('since') since?: Date): string {
  @Get('/:world/online')
  findOnlineByWorld(@Param('world') world: string): string {
  }
  }
