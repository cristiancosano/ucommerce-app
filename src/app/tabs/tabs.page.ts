import { Component } from '@angular/core';
import { CartItem } from '../interfaces/CartItem';
import { CartService } from '../services/cart/cart.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private cart: {items: CartItem[]}

  constructor(private userService: UserService, private cartService: CartService) {
    this.cart = {items: []}
    this.getCart()
  }

  isAuth = () => this.userService.isAuth()
  getCart = async () => this.cart = await this.cartService.getCart() 
  
}
