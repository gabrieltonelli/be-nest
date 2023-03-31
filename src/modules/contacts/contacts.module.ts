import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Contact } from './contact.entity';
import { User } from '../users/entities';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, User])],
  providers: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
