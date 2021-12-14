import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/interfaces/CartItem';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = environment.apiHost + '/users'
  private host2 = environment.apiHost + '/orders'

  constructor(private http: HttpClient, private userService: UserService) { }




  getOrders(){
    return new Promise(resolve => {
        
        const token = this.userService.getToken();
        const decodedToken= this.userService.getDecodedToken()
        const customerId = decodedToken.customerId
        const params = new HttpParams().appendAll({token})
        console.log(token)
        console.log(this.host)
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get(this.host+`/${customerId}/shopping-history`, {headers, params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  getOrderById(orderId: number){
    return new Promise(resolve => {
        const token = this.userService.getToken();
        const params = new HttpParams().appendAll({token})
        console.log(token)
        console.log(this.host)
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get(this.host2+`/${orderId}`, {headers, params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  createOrder(total:number, items:Array<CartItem>){
    return new Promise(resolve => {
      const token = this.userService.getToken();
      const params = new HttpParams().appendAll({total,token,items:JSON.stringify(items)})
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      console.log(params, headers)
      this.http.post(this.host2, params, {headers}).subscribe(data => resolve(data), error => console.log(error))
      })
  }
}
