import { BaseEntity } from '@/common/base.entity';
import { CustomerEntity } from '@/customers/entities/customer.entity';
import { Collection, Entity, OneToMany, OneToOne } from '@mikro-orm/core';
import { CartItemEntity } from './cart-item.entity';

@Entity({ tableName: 'carts' })
export class CartEntity extends BaseEntity {
  @OneToOne(() => CustomerEntity)
  customer!: CustomerEntity;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.order)
  items = new Collection<CartItemEntity>(this);

  constructor(partial: Partial<CartEntity>) {
    super();
    Object.assign(partial);
  }
}
