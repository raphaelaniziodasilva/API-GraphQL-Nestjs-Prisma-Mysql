import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EmailService } from './email.service';
import { Email } from './entities/email.entity';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';

@Resolver(() => Email)
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => Email)
  async createEmail(
    @Args('createEmailInput') createEmailInput: CreateEmailInput,
  ) {
    return await this.emailService.create(createEmailInput);
  }

  @Query(() => [Email], { name: 'email' })
  async findAll() {
    return await this.emailService.findAll();
  }

  @Query(() => Email, { name: 'email' })
  async findOne(@Args('id', { type: () => ID }) id: number) {
    return await this.emailService.findOne(id);
  }

  @Mutation(() => Email)
  async updateEmail(
    @Args('updateEmailInput') updateEmailInput: UpdateEmailInput,
  ) {
    return await this.emailService.update(updateEmailInput);
  }

  @Mutation(() => Email)
  async removeEmail(@Args('id', { type: () => ID }) id: number) {
    return await this.emailService.remove(id);
  }
}
