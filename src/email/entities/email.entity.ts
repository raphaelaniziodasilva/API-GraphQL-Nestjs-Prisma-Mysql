// vai ser gerado o schema do graphql gql
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Email {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
