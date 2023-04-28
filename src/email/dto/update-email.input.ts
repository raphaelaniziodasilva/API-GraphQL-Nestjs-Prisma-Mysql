import { IsNotEmpty, IsEmail } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateEmailInput {
  @Field(() => String, { description: 'Email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Nome' })
  @IsNotEmpty()
  name: string;
}
