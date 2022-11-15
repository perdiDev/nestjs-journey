import { Test, TestingModule } from '@nestjs/testing';
import { BukuController } from './buku.controller';

describe('BukuController', () => {
  let controller: BukuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BukuController],
    }).compile();

    controller = module.get<BukuController>(BukuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
