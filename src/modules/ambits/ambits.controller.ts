import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AmbitsService } from './ambits.service';
import { CreateAmbitDto } from './dto/create-ambit.dto';
import { UpdateAmbitDto } from './dto/update-ambit.dto';

@Controller('ambits')
export class AmbitsController {
  constructor(private readonly ambitsService: AmbitsService) {}

  @Post()
  create(@Body() createAmbitDto: CreateAmbitDto) {
    return this.ambitsService.create(createAmbitDto);
  }

  @Get()
  findAll() {
    return this.ambitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ambitsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAmbitDto: UpdateAmbitDto) {
    return this.ambitsService.update(+id, updateAmbitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ambitsService.remove(+id);
  }
}
