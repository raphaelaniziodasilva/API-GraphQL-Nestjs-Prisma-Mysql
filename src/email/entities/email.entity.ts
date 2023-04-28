// schema do GraphQl
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Email {
  @Field((type) => ID)
  id: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Nome' })
  name: string;
}
// vamos copiar essas configuração e coloca no creat DTO
