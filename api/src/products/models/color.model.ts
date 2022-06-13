import { BaseModel } from '@/common/base.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductModel } from './product.model';

@ObjectType()
export class ColorModel extends BaseModel {
  @Field(() => [ProductModel], { nullable: true })
  products?: ProductModel[];

  @Field()
  name!: string;

  @Field({ nullable: true })
  htmlHex?: string;

  @Field({ nullable: true })
  textureImageUrl?: string;

  constructor(partial: Partial<ColorModel>) {
    super();
    Object.assign(partial);
  }
}
