import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCategoryDto, PaginationQueryDto, UpdateCategoryDto } from './dto';
import { Category } from './category.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  getCategories(@Query() pagination: PaginationQueryDto): Promise<Category[]> {
    return this.categoryService.getCategories(pagination);
  }

  @Get(':id')
  getCategory(@Param('id') id: number): Promise<Category> {
    return this.categoryService.getCategory(id);
  }

  @Post()
  createCategory(@Body() message: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(message);
  }

  @Patch(':id')
  updateCategory(
    @Param('id') id: number,
    @Body() category: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.updateCategory(id, category);
  }

  @Delete(':id')
  removeCategory(@Param('id') id: number): Promise<void> {
    return this.categoryService.removeCategory(id);
  }
}
