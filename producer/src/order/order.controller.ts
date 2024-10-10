import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('place-order')
  placeOrder(@Body() order:OrderDto){
    return this.orderService.placeOrder(order)
  }
  @Get()
  getOrder(){
    return this.orderService.getOrder()
  }

}
