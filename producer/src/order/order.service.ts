import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
    constructor(@Inject('ORDER_SERVICE') private rabbitClient:ClientProxy){}

    async placeOrder(order:OrderDto) {
        this.rabbitClient.emit('order-placed',order)
        return {message : "Order placed"}
    }

    async getOrder() {
    return this.rabbitClient.send('fetch-order',{})
    }
}
