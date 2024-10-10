import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
