import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';
import { EmailService } from './email.service';
import { Email } from './entities/email.entity';

@Resolver(() => Email)
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => Email)
  async createEmail(@Args('data') data: CreateEmailInput): Promise<Email> {
    return await this.emailService.create(data);
  }

  @Query(() => [Email], { name: 'email' })
  async findAll(): Promise<Email[]> {
    return await this.emailService.findAll();
  }

  @Query(() => Email, { name: 'findById' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Email> {
    return await this.emailService.findOne(id);
  }

  @Mutation(() => Email)
  async updateEmail(@Args('data') data: UpdateEmailInput): Promise<Email> {
    return await this.emailService.update(data.id, data);
  }

  @Mutation(() => Email)
  async removeEmail(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Email> {
    return await this.emailService.remove(id);
  }
}
