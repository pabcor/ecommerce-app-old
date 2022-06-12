import { CartEntity } from '@/carts/entities/cart.entity';
import { BaseEntity } from '@/common/base.entity';
import { OrderEntity } from '@/orders/entities/order.entity';
import {
  BeforeCreate,
  Cascade,
  Collection,
  Entity,
  OneToMany,
  OneToOne,
  Property,
} from '@mikro-orm/core';
import * as argon2 from 'argon2';

@Entity({ tableName: 'customers' })
export class CustomerEntity extends BaseEntity {
  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property({ unique: true })
  email!: string;

  @Property()
  password!: string;

  @Property({ unique: true })
  CUIT!: string;

  @Property({ nullable: true })
  company?: string;

  @Property()
  streetAddress!: string;

  @Property()
  locality!: string;

  @Property()
  city!: string;

  @Property()
  province!: string;

  @Property()
  phone!: string;

  @Property({ default: false })
  subscribedToNewsletter!: boolean;

  @OneToMany(() => OrderEntity, (order) => order.customer, {
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  orders? = new Collection<OrderEntity>(this);

  @OneToOne(() => CartEntity, (cart) => cart.customer, { nullable: true })
  cart?: CartEntity;

  @BeforeCreate()
  async hashPassword(): Promise<void> {
    this.password = await argon2.hash(this.password);
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(partial: Partial<CustomerEntity>) {
    super();
    Object.assign(partial);
  }
}
