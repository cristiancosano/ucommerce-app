import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/interfaces/CartItem';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private host = environment.apiHost + '/cart'

  constructor(private http: HttpClient, private userService: UserService ) { }

  getCart(){
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



}
