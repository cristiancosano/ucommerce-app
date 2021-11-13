import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiHost + '/users';
  private token: any = undefined;
  private decodedToken: any = undefined;

  constructor(private http: HttpClient) { }

  getById(){
    this.refreshToken()

  }
  getByEmail()
  {
   this.refreshToken()
  }

  create(){

  }

  update(name: string, email: string, password: string, phone: string ){
    return new Promise(resolve => {
      const token = this.getToken();
      const decodedToken = this.getDecodedToken();
      const params = new HttpParams().appendAll({password, email,phone,name,token})
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      console.log(params, headers)

      this.http.put(this.host+'/'+decodedToken.customerId, params, {headers}).subscribe(data => resolve(data), error => console.log(error))
    })
  }
  
  delete(){

  }

  login(email: string, password: string){
   
    return new Promise(resolve => {
      const params = new HttpParams().appendAll({password, email})
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      console.log(params, headers)

      this.http.post(this.host+'/auth', params, {headers}).subscribe(
        (data: any) => {
          this.token = data.token
          resolve(data.token)
        },
        error => console.log(error))
    })
  }

  logout(){
    this.token = undefined
    this.decodedToken = undefined
    localStorage.removeItem('token')
  }

  isAuth(){
    this.refreshToken()
    return this.token !== undefined && this.token !== null;
  }

  getToken(){
    return JSON.parse(localStorage.getItem('token'));
  }

  refreshToken(){
    this.token = JSON.parse(localStorage.getItem('token'))
    const helper = new JwtHelperService()
    this.decodedToken = helper.decodeToken(this.token)
  }

  getDecodedToken(){
    this.refreshToken()
    return this.decodedToken
  }

}
