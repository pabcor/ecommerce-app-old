import { BaseEntity } from '@/common/base.entity';
import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { ProductEntity } from './product.entity';

@Entity({ tableName: 'colors' })
export class ColorEntity extends BaseEntity {
  @ManyToMany(() => ProductEntity, (product) => product.colors, {
    nullable: true,
  })
  products? = new Collection<ProductEntity>(this);

  @Property()
  name!: string;

  @Property({ nullable: true })
  htmlHex?: string;

  @Property({ nullable: true })
  textureImageUrl?: string;

  constructor(partial: Partial<ColorEntity>) {
    super();
    Object.assign(partial);
  }
}
