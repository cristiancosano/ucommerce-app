import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private host = environment.apiHost + '/categories'

  constructor(private http: HttpClient) { }

  getCategories(){
    return new Promise(resolve => {
      this.http.get(this.host).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  getCategory(id: number){
    return new Promise(resolve => {
      this.http.get(this.host+`/${id}`).subscribe(data => resolve(data), error => console.log(error))
    })
  }
  getProductsByCategoryId(id: number){
    return new Promise(resolve => {
      this.http.get(this.host+`/${id}/products`).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  createCategory(category: Category, token: string){
    return new Promise(resolve =>{
      this.http.post(this.host, JSON.stringify(category)).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  updateCategory(category: Category, token: string){
    return new Promise(resolve =>{
      this.http.put(this.host, JSON.stringify(category)).subscribe(data => resolve(data), error => console.log(error))
    })
  }

  deleteCategory(id: number, token: string){
    return new Promise(resolve => {
      this.http.delete(this.host+`/${id}`).subscribe(data => resolve(data), error => console.log(error))
    })
  }



}
