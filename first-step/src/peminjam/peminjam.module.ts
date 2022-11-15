import { Module } from '@nestjs/common';
import { PeminjamService } from './peminjam.service';
import { PeminjamController } from './peminjam.controller';

@Module({
  controllers: [PeminjamController],
  providers: [PeminjamService]
})
export class PeminjamModule {}
