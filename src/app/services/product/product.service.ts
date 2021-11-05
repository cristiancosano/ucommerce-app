import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host = environment.apiHost + '/products'

  constructor(private http: HttpClient) { }

  getProducts(){
    return new Promise(resolve => {
      this.http.get(this.host).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  getProduct(id: number){
    return new Promise(resolve => {
      this.http.get(this.host+`/${id}`).subscribe(data => resolve(data), error => console.log(error))
    })
  }
  getProductsByCategory(id: number){
    return new Promise(resolve => {
      this.http.get(this.host+`/${id}`).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  getProductsByText(text: string){
    const params = new HttpParams().appendAll({text})
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post(this.host+'/search', params, {headers}).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  createCategory(product: Product, token: string){
    return new Promise(resolve =>{
      this.http.post(this.host, JSON.stringify({product, token})).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  updateCategory(product: Product, token: string){
    return new Promise(resolve =>{
      this.http.put(this.host, JSON.stringify({product, token})).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  deleteCategory(id: number, token: string){
    return new Promise(resolve => {
      this.http.delete(this.host+`/${id}`).subscribe(data => resolve(data), error => console.log(error))
    })
  }
}
