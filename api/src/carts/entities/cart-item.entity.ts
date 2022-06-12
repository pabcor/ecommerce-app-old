import { BaseEntity } from '@/common/base.entity';
import { ColorEntity } from '@/products/entities/color.entity';
import { ProductEntity } from '@/products/entities/product.entity';
import { SizeEntity } from '@/products/entities/size.entity';
import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';
import { CartEntity } from './cart.entity';

@Entity({ tableName: 'cart_items' })
export class CartItemEntity extends BaseEntity {
  @ManyToOne(() => CartEntity)
  order!: CartEntity;

  @OneToOne(() => ProductEntity)
  product!: ProductEntity;

  @OneToOne(() => ColorEntity)
  color!: ColorEntity;

  @OneToOne(() => SizeEntity)
  size!: SizeEntity;

  @Property()
  quantity!: number;

  constructor(partial: Partial<CartItemEntity>) {
    super();
    Object.assign(partial);
  }
}
