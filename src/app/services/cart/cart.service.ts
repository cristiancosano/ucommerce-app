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

  private host = environment.apiHost + '/cart'

  private product: ProductExtended;
  private cart: {items: Array<CartItem>}

  constructor(private http: HttpClient, private userService: UserService, private productService: ProductService) {
   this.cart = {items: []}
  }

  async getCart(){
    this.cart.items = await this.getProducts()
    return this.cart
  }

  getProducts(){
    const token = this.userService.getToken();
    if(token != null){
      const params = new HttpParams().appendAll({token})
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return new Promise <Array<CartItem>>(resolve => {
        this.http.get(this.host + '/products', {headers,params}).subscribe((data:Array<CartItem>) => resolve(data), error => console.log(error))
      })
    }
  }

  addItem(quantity: number, productId: number){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token,quantity,productId});
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise((resolve, reject) => {
      this.http.post(this.host, params, {headers}).subscribe(data => {this.getCart(); resolve(data);}, error => reject(error))
    })
  }

  removeItem(productId: number){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.delete(this.host + `/${productId}`, {headers,params}).subscribe(data => {this.getCart(); resolve(data)}, error => console.log(error))
    })
  }

  removeItems(){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.delete(this.host, {headers,params}).subscribe(data => {this.getCart(); resolve(data)}, error => console.log(error))
    })
  }

  updateItem(quantity: number, productId: number){
    const token = this.userService.getToken();
    const params = new HttpParams().appendAll({token, quantity, productId});
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve => {
      this.http.put(this.host,params, {headers}).subscribe(data => {this.getCart(); resolve(data)}, error => console.log(error))
    })
  }
}
