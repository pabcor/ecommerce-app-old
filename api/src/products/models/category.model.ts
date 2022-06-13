import { BaseModel } from '@/common/base.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductModel } from './product.model';

@ObjectType()
export class CategoryModel extends BaseModel {
  @Field(() => [ProductModel], { nullable: true })
  products?: ProductModel[];

  @Field(() => [CategoryModel], { nullable: true })
  subCategories?: CategoryModel[];

  @Field(() => CategoryModel)
  parentCategory!: CategoryModel;

  @Field()
  name!: string;

  @Field()
  url!: string;

  constructor(partial: Partial<CategoryModel>) {
    super();
    Object.assign(partial);
  }
}
