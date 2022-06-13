import {
  ReflectMetadataProvider,
  UnderscoreNamingStrategy,
} from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { CartsModule } from './carts/carts.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';
@Module({
  imports: [
    MikroOrmModule.forRoot({
      clientUrl: 'postgresql://root:1234@localhost/ecommerce',
      debug: true,
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      metadataProvider: ReflectMetadataProvider,
      migrations: {
        path: './dist/database/migrations',
        pathTs: './src/database/migrations',
      },
      namingStrategy: UnderscoreNamingStrategy,
      tsNode: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
    }),
    AuthModule,
    CustomersModule,
    CartsModule,
    OrdersModule,
    ProductsModule,
    StocksModule,
  ],
})
export class AppModule {}
