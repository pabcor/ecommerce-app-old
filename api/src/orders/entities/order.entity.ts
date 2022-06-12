import { BaseEntity } from '@/common/base.entity';
import { CustomerEntity } from '@/customers/entities/customer.entity';
import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { OrderItemEntity } from './order-item.entity';

@Entity({ tableName: 'orders' })
export class OrderEntity extends BaseEntity {
  @ManyToOne(() => CustomerEntity)
  customer!: CustomerEntity;

  @Property({ default: 'Pending' })
  paymentStatus!: 'Pending' | 'Cashed';

  @Property({ default: 'Pending' })
  shipmentStatus!: 'Pending' | 'Shipped';

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  items = new Collection<OrderItemEntity>(this);

  constructor(partial: Partial<OrderEntity>) {
    super();
    Object.assign(partial);
  }
}
