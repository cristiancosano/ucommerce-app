import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiHost + '/users';
  private token: any = undefined;

  constructor(private http: HttpClient) { }

  getById(){

  }

  create(){

  }

  update(){

  }
  
  delete(){

  }

  auth(email: string, password: string){
    return new Promise(resolve => {
      const params = new HttpParams().appendAll({password, email})
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      console.log(params, headers)

      this.http.post(this.host+'/auth', params, {headers}).subscribe(
        (data: any) => {
          this.token = data.token
          resolve(data)
        },
        error => console.log(error))
    })
  }

  isAuth(){
    return this.token !== undefined && this.token !== null;
  }

  getToken(){
    return this.token;
  }
}
