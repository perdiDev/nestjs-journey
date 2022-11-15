import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BukuController } from './buku/buku.controller';
import { PeminjamModule } from './peminjam/peminjam.module';
import { BukuModule } from './buku/buku.module';

@Module({
  imports: [PeminjamModule, BukuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
