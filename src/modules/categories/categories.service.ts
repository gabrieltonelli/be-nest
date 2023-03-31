import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto, PaginationQueryDto, UpdateCategoryDto } from './dto';
import { Category } from './category.entity';
import { User } from '../users/entities';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getCategories({ limit, offset }: PaginationQueryDto): Promise<Category[]> {
    return await this.categoryRepository.find({
      //relations: ['user'],
      skip: offset,
      take: limit,
    });
  }

  async getCategory(id: number): Promise<Category> {
    const category: Category = await this.categoryRepository.findOne(id, {
      //relations: ['user'],
    });

    if (!category) {
      throw new NotFoundException('Resource not found');
    }

    return category;
  }

  async createCategory({ name, username, idSocialNetwork, email, photoUrl, company, city, job, gender, user }: CreateCategoryDto) {
    const category: Category = this.categoryRepository.create({ name, username, idSocialNetwork, email, photoUrl, company, city, job, gender, user });
    return this.categoryRepository.save(category);
  }

  async updateCategory(id: number, { name, username, idSocialNetwork, email, photoUrl, company, city, job, gender }: UpdateCategoryDto) {
    const category: Category = await this.categoryRepository.preload({
      id,
      name, username, idSocialNetwork, email, photoUrl, company, city, job, gender
    });

    if (!category) {
      throw new NotFoundException('Resource not found');
    }

    return category;
  }

  async removeCategory(id: number): Promise<void> {
    const category: Category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new NotFoundException('Resource not found');
    }

    this.categoryRepository.remove(category);
  }
}
