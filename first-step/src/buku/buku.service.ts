import { Injectable } from '@nestjs/common';
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';

@Injectable()
export class BukuService {
    findAll() {
        return `This action return all Buku`;
    }

    findOne(id: number) {
        return `This action retun buku berId #${id}`;
    }

    create(createBukuDto: CreateBukuDto) {
        return `This action add a new book`;
    }

    update(id: number, updateBukuDto: UpdateBukuDto) {
        return `This action update data buku ber-Id #${id}`;
    }

    delete(id: number) {
        return `This action delete buku ber-Id #${id}`;
    }
}
