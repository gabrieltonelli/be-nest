import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateContactDto, PaginationQueryDto, UpdateContactDto } from './dto';
import { Contact } from './contact.entity';
import { User } from '../users/entities';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private readonly contactRepository: Repository<Contact>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getContacts({ limit, offset }: PaginationQueryDto): Promise<Contact[]> {
    return await this.contactRepository.find({
      relations: ['user'],
      skip: offset,
      take: limit,
    });
  }

  async getContact(id: number): Promise<Contact> {
    const contact: Contact = await this.contactRepository.findOne(id, {
      relations: ['user'],
    });

    if (!contact) {
      throw new NotFoundException('Resource not found');
    }

    return contact;
  }

  async createContact({ name, username, idSocialNetwork, email, photoUrl, company, city, job, gender, user }: CreateContactDto) {
    const contact: Contact = this.contactRepository.create({ name, username, idSocialNetwork, email, photoUrl, company, city, job, gender, user });
    return this.contactRepository.save(contact);
  }

  async updateContact(id: number, { name, username, idSocialNetwork, email, photoUrl, company, city, job, gender }: UpdateContactDto) {
    const contact: Contact = await this.contactRepository.preload({
      id,
      name, username, idSocialNetwork, email, photoUrl, company, city, job, gender
    });

    if (!contact) {
      throw new NotFoundException('Resource not found');
    }

    return contact;
  }

  async removeContact(id: number): Promise<void> {
    const contact: Contact = await this.contactRepository.findOne(id);

    if (!contact) {
      throw new NotFoundException('Resource not found');
    }

    this.contactRepository.remove(contact);
  }
}
