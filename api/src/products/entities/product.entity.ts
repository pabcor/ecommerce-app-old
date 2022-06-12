import { BaseEntity } from '@/common/base.entity';
import { StockEntity } from '@/stocks/entities/stock.entity';
import {
  Cascade,
  Collection,
  Entity,
  ManyToMany,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { CategoryEntity } from './category.entity';
import { ColorEntity } from './color.entity';
import { ImageEntity } from './image.entity';
import { SizeEntity } from './size.entity';

@Entity({ tableName: 'products' })
export class ProductEntity extends BaseEntity {
  @Property()
  title!: string;

  @Property({ nullable: true, unique: true })
  code?: string;

  @Property()
  description!: string;

  @Property({ nullable: true })
  retailPrice?: number;

  @Property({ nullable: true })
  oldRetailPrice?: number;

  @Property({ nullable: true })
  wholesalePrice?: number;

  @Property({ nullable: true })
  oldWholesalePrice?: number;

  @Property()
  isPublished!: boolean;

  @Property()
  isEnabled!: boolean;

  @ManyToMany(() => CategoryEntity, (categories) => categories.products, {
    owner: true,
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  categories? = new Collection<CategoryEntity>(this);

  @ManyToMany(() => ColorEntity, (colors) => colors.products, {
    owner: true,
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  colors? = new Collection<ColorEntity>(this);

  @ManyToMany(() => SizeEntity, (sizes) => sizes.products, {
    owner: true,
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  sizes? = new Collection<SizeEntity>(this);

  @OneToMany(() => ImageEntity, (images) => images.product, {
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  images? = new Collection<ImageEntity>(this);

  @OneToMany(() => StockEntity, (stocks) => stocks.product, {
    nullable: true,
    cascade: [Cascade.REMOVE],
  })
  stocks? = new Collection<StockEntity>(this);

  constructor(partial: Partial<ProductEntity>) {
    super();
    Object.assign(partial);
  }
}
