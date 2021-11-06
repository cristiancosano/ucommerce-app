import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';
import { OrderService } from 'src/app/services/order/order.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.page.html',
  styleUrls: ['./shopping-history.page.scss'],
})
export class ShoppingHistoryPage implements OnInit {

  private orders: Array<Order>;
  constructor(private userService: UserService, private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders()
  }

  getOrders = () => {
    this.orderService.getOrders(this.userService.getToken(), 1).then((data: Array<Order>) => {
      this.orders = data
    })
  }

}
