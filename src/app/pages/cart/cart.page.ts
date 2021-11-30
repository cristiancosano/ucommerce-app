import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/interfaces/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  private cart: {items: Array<CartItem>};

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) {
    this.cart = {items: []}    
  }

  ngOnInit() {
    this.getItems();
  }

  removeItem(productId: number){
    this.cartService.removeItem(productId);
  }

  getItems() {
    this.cartService.getCart().then(cart =>  this.cart = cart)
  }
    
  updateItemUnits(quantity: number, productId: number){
    if(quantity > 0) this.cartService.updateItem(quantity, productId)
    else this.removeItem(productId)
  }
  
  getTotal(){
    let total = 0;  
      for (let product of this.cart.items)
        total += product.quantity * product.unitPrice
    return total.toFixed(2);
  }
}
