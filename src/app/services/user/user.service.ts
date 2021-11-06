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

  create(){

  }

  update(){

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
    return localStorage.getItem('token');
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
