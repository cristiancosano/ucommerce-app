import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = environment.apiHost + '/orders'

  constructor(private http: HttpClient, private userService: UserService) { }




  getOrders(customerId: number){
    return new Promise(resolve => {
        const token = this.userService.getToken();
        const params = new HttpParams().appendAll({token})
        console.log(token)
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get(this.host+`/${customerId}`, {headers, params}).subscribe(data => resolve(data), error => console.log(error))
    })
  }
}