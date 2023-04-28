import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEmailInput {
  @Field()
  @IsAlpha() //so aceita caracteres
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
