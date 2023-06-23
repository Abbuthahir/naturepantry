import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePage } from './core/base-page';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
   serviceCurrent: any ;
   adminData: any

  constructor(private http: HttpClient) { 
  
  }

  getProgrammingLanguages(): Observable<any> {
    return this.http.get('http://localhost:3001/programming-languages');
  }
  createProduct(data: any) {
    console.log('post', data);

    return this.http.post('http://localhost:3001/programming-languages', data)
  }
  removeProduct(id: Number){
    return this.http.delete(`http://localhost:3001/programming-languages/${id}`)
  }

}
