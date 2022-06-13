import { BaseModel } from '@/common/base.model';
import { CustomerModel } from '@/customers/models/customer.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { CartItemModel } from './cart-item.model';

@ObjectType()
export class CartModel extends BaseModel {
  @Field(() => CustomerModel)
  customer!: CustomerModel;

  @Field(() => [CartItemModel])
  items!: CartItemModel[];

  constructor(partial: Partial<CartModel>) {
    super();
    Object.assign(partial);
  }
}
