import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class AppService {
    orders : OrderDto[] = []
    async handelOrder(order:OrderDto){
        this.orders.push(order)
        console.log(`A new order was placed by a customer: ${order.email}`)
    }

    async getOrder(){
        return this.orders
    }
}
