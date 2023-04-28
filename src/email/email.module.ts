import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailResolver } from './email.resolver';
import { PrismaModule } from 'src/databasePrisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [EmailResolver, EmailService],
  exports: [EmailService],
})
export class EmailModule {}
