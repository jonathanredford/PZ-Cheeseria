import { Test, TestingModule } from '@nestjs/testing';
import { CheesesService } from './cheeses.service';

describe('CheesesService', () => {
  let service: CheesesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheesesService],
    }).compile();

    service = module.get<CheesesService>(CheesesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
