import { Module } from '@nestjs/common';
import { PrismaModule } from '../databasePrisma/prisma.module';
import { EmailResolver } from './email.resolver';
import { EmailService } from './email.service';

@Module({
  imports: [PrismaModule],
  providers: [EmailResolver, EmailService],
})
export class EmailModule {}
