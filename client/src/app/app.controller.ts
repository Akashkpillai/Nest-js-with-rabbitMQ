import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
    constructor (private readonly appService:AppService){}
    @EventPattern('order-placed')
    handelOrder(@Payload()order:OrderDto){
        return this.appService.handelOrder(order);
    }

    @MessagePattern('fetch-order')
    getOrder(){
        return this.appService.getOrder();
    }
}
