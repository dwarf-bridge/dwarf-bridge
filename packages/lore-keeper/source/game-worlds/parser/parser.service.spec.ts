import { Test, TestingModule } from '@nestjs/testing';
import { Parser } from './parser.service';

describe('Parser', () => {
  let service: Parser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Parser],
    }).compile();

    service = module.get<Parser>(Parser);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
