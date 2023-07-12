import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePage } from './core/base-page';

@Injectable({
  providedIn: 'root'
})

export class DataService extends BasePage {
   serviceCurrent: any ;
   adminData: any;
   cartData: any[]= [];

  constructor(private http: HttpClient) { 
    super();
  }

  getProgrammingLanguages(category: any): Observable<any> {
    return this.http.get(`http://localhost:3001/programming-languages?category=${category}`, category);
  }
  createProduct(data: any) {
    console.log('post', data);

    return this.http.post('http://localhost:3001/programming-languages', data)
  }
  removeProduct(id: Number){
    return this.http.delete(`http://localhost:3001/programming-languages/${id}`)
  }
  addCart(product: any){
    console.log('abbu', product);
    
     let carts = JSON.stringify(product);
     localStorage.setItem('cart', carts);
  }
  getCart(){
    let cart: any = localStorage.getItem('cart');
    return JSON.parse(cart);

  }
}
