import { Injectable } from '@nestjs/common';
import { PrismaService } from '../databasePrisma/prisma.service';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';
import { Email } from './entities/email.entity';

@Injectable()
export class EmailService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEmailInput): Promise<Email> {
    const email = await this.prisma.email.create({ data });
    return email;
  }

  async findAll(): Promise<Email[]> {
    return await this.prisma.email.findMany();
  }

  async findOne(id: number): Promise<Email> {
    return this.prisma.email.findUnique({ where: { id } });
  }

  update(id: number, updateEmailInput: UpdateEmailInput) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
