import { BaseModel } from '@/common/base.model';
import { ColorModel } from '@/products/models/color.model';
import { ProductModel } from '@/products/models/product.model';
import { SizeModel } from '@/products/models/size.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderItemModel extends BaseModel {
  @Field(() => ProductModel)
  product!: ProductModel;

  @Field(() => ColorModel)
  color!: ColorModel;

  @Field(() => SizeModel)
  size!: SizeModel;

  @Field(() => Int)
  quantity!: number;

  constructor(partial: Partial<OrderItemModel>) {
    super();
    Object.assign(partial);
  }
}
