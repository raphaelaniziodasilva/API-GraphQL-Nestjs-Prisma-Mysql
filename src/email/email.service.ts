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

  async update(id: number, data: UpdateEmailInput): Promise<Email> {
    return await this.prisma.email.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: number): Promise<Email> {
    return await this.prisma.email.delete({
      where: {
        id,
      },
    });
  }
}
