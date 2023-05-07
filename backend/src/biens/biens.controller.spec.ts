import { Test, TestingModule } from '@nestjs/testing';
import { BiensController } from './biens.controller';
import { BiensService } from './biens.service';

describe('BiensController', () => {
  let controller: BiensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiensController],
      providers: [BiensService],
    }).compile();

    controller = module.get<BiensController>(BiensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
