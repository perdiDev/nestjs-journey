import { Module } from '@nestjs/common';
import { BukuService } from './buku.service';
import { BukuController } from './buku.controller'; 

@Module({
  controllers: [BukuController],
  providers: [BukuService],
})
export class BukuModule {}
