import { Injectable } from '@nestjs/common';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';
import { PrismaService } from 'src/databasePrisma/prisma.service';
import { Email } from './entities/email.entity';
import { validateOrReject } from 'class-validator';

@Injectable()
export class EmailService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEmailInput) {
    return this.prisma.email.create({
      data,
    });
  }

  async findAll() {
    return `This action returns all email`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  async update(updateEmailInput: UpdateEmailInput) {
    return `This action updates a email`;
  }

  async remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
