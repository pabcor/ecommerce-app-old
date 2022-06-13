import { BaseModel } from '@/common/base.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductModel } from './product.model';

@ObjectType()
export class SizeModel extends BaseModel {
  @Field(() => [ProductModel], { nullable: true })
  products?: ProductModel[];

  @Field()
  name!: string;

  constructor(partial: Partial<SizeModel>) {
    super();
    Object.assign(partial);
  }
}
