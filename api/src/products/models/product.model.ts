import { BaseModel } from '@/common/base.model';
import { StockModel } from '@/stocks/models/stock.model';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CategoryModel } from './category.model';
import { ColorModel } from './color.model';
import { ImageModel } from './image.model';
import { SizeModel } from './size.model';

@ObjectType()
export class ProductModel extends BaseModel {
  @Field()
  title!: string;

  @Field({ nullable: true })
  code?: string;

  @Field()
  description!: string;

  @Field(() => Int, { nullable: true })
  retailPrice?: number;

  @Field(() => Int, { nullable: true })
  oldRetailPrice?: number;

  @Field(() => Int, { nullable: true })
  wholesalePrice?: number;

  @Field(() => Int, { nullable: true })
  oldWholesalePrice?: number;

  @Field()
  isPublished!: boolean;

  @Field()
  isEnabled!: boolean;

  @Field(() => [CategoryModel], { nullable: true })
  categories?: CategoryModel[];

  @Field(() => [ColorModel], { nullable: true })
  colors?: ColorModel[];

  @Field(() => [SizeModel], { nullable: true })
  sizes?: SizeModel[];

  @Field(() => [ImageModel], { nullable: true })
  images?: ImageModel[];

  @Field(() => [StockModel], { nullable: true })
  stocks?: StockModel[];

  constructor(partial: Partial<ProductModel>) {
    super();
    Object.assign(partial);
  }
}
