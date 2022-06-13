import { Field, Int } from '@nestjs/graphql';

export class BaseModel {
  @Field(() => Int)
  id!: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
