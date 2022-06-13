import { BaseModel } from '@/common/base.model';
import { CustomerModel } from '@/customers/models/customer.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { OrderItemModel } from './order-item.model';

@ObjectType()
export class OrderModel extends BaseModel {
  @Field(() => CustomerModel)
  customer!: CustomerModel;

  @Field()
  paymentStatus!: 'Pending' | 'Cashed';

  @Field()
  shipmentStatus!: 'Pending' | 'Shipped';

  @Field(() => [OrderItemModel])
  items!: OrderItemModel[];

  constructor(partial: Partial<OrderModel>) {
    super();
    Object.assign(partial);
  }
}
