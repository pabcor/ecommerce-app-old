import { CartModel } from '@/carts/models/cart.model';
import { BaseModel } from '@/common/base.model';
import { OrderModel } from '@/orders/models/order.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerModel extends BaseModel {
  @Field(() => Int)
  id!: number;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  CUIT!: string;

  @Field({ nullable: true })
  company?: string;

  @Field()
  streetAddress!: string;

  @Field()
  locality!: string;

  @Field()
  city!: string;

  @Field()
  province!: string;

  @Field()
  phone!: string;

  @Field()
  subscribedToNewsletter!: boolean;

  @Field(() => [OrderModel], { nullable: true })
  orders?: OrderModel[];

  @Field(() => CartModel)
  cart?: CartModel;

  constructor(partial: Partial<CustomerModel>) {
    super();
    Object.assign(partial);
  }
}
