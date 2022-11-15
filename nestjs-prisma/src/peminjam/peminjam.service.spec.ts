import { Test, TestingModule } from '@nestjs/testing';
import { PeminjamService } from './peminjam.service';

describe('PeminjamService', () => {
  let service: PeminjamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeminjamService],
    }).compile();

    service = module.get<PeminjamService>(PeminjamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
