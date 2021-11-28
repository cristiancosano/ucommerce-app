import { Component, OnInit} from '@angular/core';
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
  private cart: any
  loading : Boolean
  private totalBuyPrice: number;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    // this.getCartUser();
    this.getCartProducts();
    //console.log(this.cart)
    this.updateCart();
  }

  deleteAllProductsOfCart(){
    this.cartService.removeCart();
    this.getTotal();
    this.updateCart();
  }

  remove(){
    this.cartService.removeProductOfCart(this.productId);//
    //this.router.navigate(["/products"]);
    this.updateCart();
  }

  // getCartUser = () => {
  //   this.cartService.getCartByCustomer().then((data: Array<CartItem>) => {
  //     this.cart = data
  //     console.log(data)
  //   })
  // }

  getCartProducts() {
    this.loading=true
    this.cartService.getCartProducts().then((data: Array<CartItem>)=> {
      this.cart = data
      this.loading=false
     })
    }
    
  aumentarItemCarrito(productId: number){
    for(let product of this.cart|| []){
      if(product.productId==productId){
        product.quantity=product.quantity+1
      }
    }
    this.updateCart();
  }

  bajarItemCarrito(productId:number){
    for(let product of this.cart|| []){
      if(product.productId==productId){
        product.quantity=product.quantity-1
      }
    }
    this.updateCart();
  }
  
  getTotal = () => {
    let total=0;  
      for (let product of this.cart|| [])
      total += product.quantity * product.unitPrice
    return total;
  }

 updateCart = () => 
 {
   this.total = 0;
  // this.getCartUser()
  this.getCartProducts()
 }

}
