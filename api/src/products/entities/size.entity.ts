import { BaseEntity } from '@/common/base.entity';
import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { ProductEntity } from './product.entity';

@Entity({ tableName: 'sizes' })
export class SizeEntity extends BaseEntity {
  @ManyToMany(() => ProductEntity, (product) => product.sizes, {
    nullable: true,
  })
  products? = new Collection<ProductEntity>(this);

  @Property()
  name!: string;

  constructor(partial: Partial<SizeEntity>) {
    super();
    Object.assign(partial);
  }
}
