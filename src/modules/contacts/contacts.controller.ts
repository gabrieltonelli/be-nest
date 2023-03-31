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
import { CreateContactDto, PaginationQueryDto, UpdateContactDto } from './dto';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  getContacts(@Query() pagination: PaginationQueryDto): Promise<Contact[]> {
    return this.contactService.getContacts(pagination);
  }

  @Get(':id')
  getContact(@Param('id') id: number): Promise<Contact> {
    return this.contactService.getContact(id);
  }

  @Post()
  createContact(@Body() message: CreateContactDto): Promise<Contact> {
    return this.contactService.createContact(message);
  }

  @Patch(':id')
  updateContact(
    @Param('id') id: number,
    @Body() contact: UpdateContactDto,
  ): Promise<Contact> {
    return this.contactService.updateContact(id, contact);
  }

  @Delete(':id')
  removeContact(@Param('id') id: number): Promise<void> {
    return this.contactService.removeContact(id);
  }
}
