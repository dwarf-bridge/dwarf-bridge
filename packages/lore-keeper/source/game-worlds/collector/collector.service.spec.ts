import { Test, TestingModule } from '@nestjs/testing';
import { Collector } from './collector.service';

describe('CollectorService', () => {
  let service: Collector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Collector],
    }).compile();

    service = module.get<Collector>(Collector);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
