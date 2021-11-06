import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = environment.apiHost + '/orders'

  constructor(private http: HttpClient) { }




  getOrders(token: string, customerId: number){
    return new Promise(resolve => {
        const params = new HttpParams().appendAll({token})
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get(this.host+`/${customerId}`, {params} ).subscribe(data => resolve(data), error => console.log(error))
    })
  }
}