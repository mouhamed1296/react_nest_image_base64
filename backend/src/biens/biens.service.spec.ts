import { Test, TestingModule } from '@nestjs/testing';
import { BiensService } from './biens.service';

describe('BiensService', () => {
  let service: BiensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiensService],
    }).compile();

    service = module.get<BiensService>(BiensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
