import { BaseModel } from '@/common/base.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ColorModel } from './color.model';
import { ProductModel } from './product.model';

@ObjectType()
export class ImageModel extends BaseModel {
  @Field(() => ProductModel)
  product!: ProductModel;

  @Field(() => ColorModel)
  color!: ColorModel;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field()
  url!: string;

  constructor(partial: Partial<ImageModel>) {
    super();
    Object.assign(partial);
  }
}
