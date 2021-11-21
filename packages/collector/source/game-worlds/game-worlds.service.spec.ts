import { Test, TestingModule } from '@nestjs/testing';
import { GameWorldsService } from './game-worlds.service';

describe('GameWorldsService', () => {
  let service: GameWorldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameWorldsService],
    }).compile();

    service = module.get<GameWorldsService>(GameWorldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
