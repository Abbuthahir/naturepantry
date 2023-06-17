import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  getProgrammingLanguages(): Observable<any> {
    return this.http.get('http://localhost:3000/programming-languages');
  }
  createProduct(data: any) {
    console.log('post', data);

    return this.http.post('http://localhost:3000/programming-languages', data)
  }
  removeProduct(id: Number){
    return this.http.delete(`http://localhost:3000/programming-languages/${id}`)
  }

}
