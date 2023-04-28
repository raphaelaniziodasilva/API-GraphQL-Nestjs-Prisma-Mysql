import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEmailInput {
  @Field(() => String, { description: 'Email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Nome' })
  @IsNotEmpty()
  name: string;
}
