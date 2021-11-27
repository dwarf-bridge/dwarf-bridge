import { Test, TestingModule } from '@nestjs/testing';
import { OnlineCheckService } from './online-check.service';

describe('OnlineCheckService', () => {
  let service: OnlineCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineCheckService],
    }).compile();

    service = module.get<OnlineCheckService>(OnlineCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
