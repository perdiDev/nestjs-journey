import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BukuService } from './buku.service';
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';

@Controller('buku')
export class BukuController {
    constructor(private readonly bukuService: BukuService) {}

    @Get()
    findAll() {
        return this.bukuService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bukuService.findOne(+id);
    }

    @Post()
    create(@Body() createBukuDto: CreateBukuDto) {
        return this.bukuService.create(createBukuDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBukuDto: UpdateBukuDto) {
        return this.bukuService.update(+id, updateBukuDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.bukuService.delete(+id);
    }
}
