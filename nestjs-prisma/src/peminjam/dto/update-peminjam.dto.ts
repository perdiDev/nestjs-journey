import { PartialType } from '@nestjs/mapped-types';
import { CreatePeminjamDto } from './create-peminjam.dto';

export class UpdatePeminjamDto extends PartialType(CreatePeminjamDto) {}
