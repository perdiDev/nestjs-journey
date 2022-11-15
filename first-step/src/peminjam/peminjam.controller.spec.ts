import { Test, TestingModule } from '@nestjs/testing';
import { PeminjamController } from './peminjam.controller';
import { PeminjamService } from './peminjam.service';

describe('PeminjamController', () => {
  let controller: PeminjamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeminjamController],
      providers: [PeminjamService],
    }).compile();

    controller = module.get<PeminjamController>(PeminjamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
