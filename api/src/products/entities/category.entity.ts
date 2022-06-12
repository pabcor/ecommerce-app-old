import { BaseEntity } from '@/common/base.entity';
import {
  Cascade,
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { ProductEntity } from './product.entity';

@Entity({ tableName: 'categories' })
export class CategoryEntity extends BaseEntity {
  @ManyToMany(() => ProductEntity, (product) => product.categories, {
    nullable: true,
  })
  products? = new Collection<ProductEntity>(this);

  @OneToMany(() => CategoryEntity, (category) => category.parentCategory, {
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  subCategories? = new Collection<CategoryEntity>(this);

  @ManyToOne(() => CategoryEntity)
  parentCategory!: CategoryEntity;

  @Property()
  name!: string;

  @Property()
  url!: string;

  constructor(partial: Partial<CategoryEntity>) {
    super();
    Object.assign(partial);
  }
}
