import { Injectable } from '@nestjs/common';
import { CreateAmbitDto } from './dto/create-ambit.dto';
import { UpdateAmbitDto } from './dto/update-ambit.dto';

@Injectable()
export class AmbitsService {
  create(createAmbitDto: CreateAmbitDto) {
    return 'This action adds a new ambit';
  }

  findAll() {
    return `This action returns all ambits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ambit`;
  }

  update(id: number, updateAmbitDto: UpdateAmbitDto) {
    return `This action updates a #${id} ambit`;
  }

  remove(id: number) {
    return `This action removes a #${id} ambit`;
  }
}
