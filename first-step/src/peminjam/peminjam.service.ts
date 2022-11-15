import { Injectable } from '@nestjs/common';
import { CreatePeminjamDto } from './dto/create-peminjam.dto';
import { UpdatePeminjamDto } from './dto/update-peminjam.dto';

@Injectable()
export class PeminjamService {
  create(createPeminjamDto: CreatePeminjamDto) {
    return 'This action adds a new peminjam';
  }

  findAll() {
    return `This action returns all peminjam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peminjam`;
  }

  update(id: number, updatePeminjamDto: UpdatePeminjamDto) {
    return `This action updates a #${id} peminjam`;
  }

  remove(id: number) {
    return `This action removes a #${id} peminjam`;
  }
}
