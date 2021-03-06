import { BaseEntity } from '@/common/base.entity';
import { ColorEntity } from '@/products/entities/color.entity';
import { ProductEntity } from '@/products/entities/product.entity';
import { SizeEntity } from '@/products/entities/size.entity';
import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';

@Entity({ tableName: 'stocks' })
export class StockEntity extends BaseEntity {
  @ManyToOne(() => ProductEntity)
  product!: ProductEntity;

  @OneToOne(() => ColorEntity)
  color!: ColorEntity;

  @OneToOne(() => SizeEntity)
  size!: SizeEntity;

  @Property()
  stock!: number;

  constructor(partial: Partial<StockEntity>) {
    super();
    Object.assign(partial);
  }
}
