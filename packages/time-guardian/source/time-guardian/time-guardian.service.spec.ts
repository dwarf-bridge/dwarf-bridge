import { Test, TestingModule } from '@nestjs/testing';
import { TimeGuardianService } from './time-guardian.service';

describe('TimeGuardianService', () => {
  let service: TimeGuardianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeGuardianService],
    }).compile();

    service = module.get<TimeGuardianService>(TimeGuardianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
