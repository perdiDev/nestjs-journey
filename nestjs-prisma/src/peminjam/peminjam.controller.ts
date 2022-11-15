import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeminjamService } from './peminjam.service';
import { CreatePeminjamDto } from './dto/create-peminjam.dto';
import { UpdatePeminjamDto } from './dto/update-peminjam.dto';

@Controller('peminjam')
export class PeminjamController {
  constructor(private readonly peminjamService: PeminjamService) {}

  @Post()
  create(@Body() createPeminjamDto: CreatePeminjamDto) {
    return this.peminjamService.create(createPeminjamDto);
  }

  @Get()
  findAll() {
    return this.peminjamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peminjamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeminjamDto: UpdatePeminjamDto) {
    return this.peminjamService.update(+id, updatePeminjamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peminjamService.remove(+id);
  }
}
