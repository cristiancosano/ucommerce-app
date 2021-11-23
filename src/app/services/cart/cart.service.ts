import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { CartItem } from 'src/app/interfaces/CartItem';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { Product } from 'src/app/interfaces/Product';
import { ProductExtended } from 'src/app/interfaces/ProductExtended';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];

  private host = environment.apiHost + '/cart'

  constructor(private http: HttpClient, private userService: UserService, private productService: ProductService, private product: ProductExtended, private cartItem : CartItem) { }

  getCartByCustomer(){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.get(this.host, {headers,params}).subscribe(data => resolve(data), error => console.log(error))
    })

  }
  getCartProducts(){
     
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.get(this.host + '/products', {headers,params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  addProductToCart(){
    const token = this.userService.getToken();
    const quantity = this.cartItem.quantity;
    const productId = this.cartItem.productId;
    const params = new HttpParams().appendAll({token,quantity,productId});
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.post(this.host, {headers,params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  removeProductOfCart(productId: number){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.delete(this.host + productId, {headers,params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  removeCart(){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.delete(this.host, {headers,params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  updateItemCart(){
    const token = this.userService.getToken();
    const quantity = this.cartItem.quantity;
    const productId = this.cartItem.productId;
    const params = new HttpParams().appendAll({token,quantity,productId});
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.put(this.host, {headers,params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }
}
