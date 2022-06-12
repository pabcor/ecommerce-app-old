import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [AuthModule, CustomersModule, CartsModule, OrdersModule, ProductsModule, StocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
