import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';
import { OrderService } from 'src/app/services/order/order.service';
@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.page.html',
  styleUrls: ['./shopping-history.page.scss'],
})
export class ShoppingHistoryPage implements OnInit {

  private orders: Array<Order>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders()
  }

  getOrders = () => {
    console.log("hola")
    this.orderService.getOrders().then((data: Array<Order>) => {
      this.orders = data
      console.log(data)
    })
  }

}
