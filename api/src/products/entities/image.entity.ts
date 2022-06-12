import { BaseEntity } from '@/common/base.entity';
import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';
import { ColorEntity } from './color.entity';
import { ProductEntity } from './product.entity';

@Entity({ tableName: 'images' })
export class ImageEntity extends BaseEntity {
  @ManyToOne(() => ProductEntity)
  product!: ProductEntity;

  @OneToOne(() => ColorEntity)
  color!: ColorEntity;

  @Property({ nullable: true })
  order?: number;

  @Property()
  url!: string;

  constructor(partial: Partial<ImageEntity>) {
    super();
    Object.assign(partial);
  }
}
