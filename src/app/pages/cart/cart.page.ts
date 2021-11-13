import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductExtended } from 'src/app/interfaces/ProductExtended';

import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/interfaces/CartItem';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  private productsCart: Array<ProductExtended>;
  private cart: Array<CartItem>;
  private totalBuyPrice: Number;
  private total: Number = 0;
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getCartUser()
    this.getCartProducts()
   
  }



  getCartUser = () => {
    this.cartService.getCart().then((data: Array<CartItem>) => {
      this.cart = data
      console.log(data)
    })
  }
  getCartProducts = () => {
    this.cartService.getCartProducts().then((data: Array<ProductExtended>) => {
      this.productsCart = data
      this.updateTotalPrice()
    })
  }

  updateTotalPrice = () => {
    
  
    for (let x = 0 ; x < this.productsCart.length; x++ )
    {
      this.total = Number(this.total) + Number((Number(this.productsCart[x].quantity) * Number(this.productsCart[x].unitPrice)))
      console.log(Number(this.productsCart[x].quantity))
      console.log(Number(this.productsCart[x].unitPrice))
      console.log(Number(this.total))
      console.log(Number(this.productsCart[x].quantity * this.productsCart[x].unitPrice))

    }
    this.totalBuyPrice = this.total
    console.log(this.total)
 }

}
