import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductExtended } from 'src/app/interfaces/ProductExtended';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/interfaces/CartItem';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectedItems = [];
  total = 0;
  productId : number
  private productsCart: Array<ProductExtended>;
  private cart: Array<CartItem>;
  private totalBuyPrice: number;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCartUser();
    this.getCartProducts()
    let items = this.productsCart;
    let selected = {};

    for(let obj of items){
      selected[obj.productId] = {...obj, count: 1};
    }

    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.quantity * b.unitPrice), 0);
  }

  remove(){
    this.cartService.removeProductOfCart(this.productId);//
    this.router.navigate(["/products"]);
  }

  getCartUser = () => {
    this.cartService.getCartByCustomer().then((data: Array<CartItem>) => {
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
      this.total = this.total + (this.productsCart[x].quantity * this.productsCart[x].unitPrice)
      
    }
    this.totalBuyPrice = this.total
    console.log(this.total)
 }

 updateCart = () => 
 {
   this.total = 0;
  this.getCartUser()
  this.getCartProducts()
 }

}
