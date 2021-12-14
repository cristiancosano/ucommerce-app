import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/interfaces/CartItem';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/services/order/order.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  private cart: {items: Array<CartItem>};

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router, private orderService:OrderService,private toastController: ToastController) {
    this.cart = {items: []}    
  }

  ngOnInit() {
    this.getItems();
  }

  removeItem(productId: number){
    this.cartService.removeItem(productId);
  }

  removeItems(){
    this.cartService.removeItems();
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

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      position: 'bottom'
    });
    await toast.present();
  }

  pay(){
    this.orderService.createOrder(Number(this.getTotal()),this.cart.items)
    .then(() => {
      this.presentToast('Pedido realizado correctamente!!')
    })
    .catch(() => {
      this.presentToast('Ha ocurrido un problema al realizar el pedido :(')
    });
  }
}
