import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasePage } from '../core/base-page';
import { DataService } from '../data.service';
declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  extends BasePage implements OnInit {
  products: any = [];
  // url: any;
  // public getJsonValue: any;
  // public postJsonValue: any;
  // constructor(private http: HttpClient) { 
  //   http.get('http://localhost:3000/programming-languages').subscribe(
  //     (response: any) => {
  //       console.log(response);

  //       this.products = this.products.concat(response.data);
  //     })
  // }

  // ngOnInit(): void {
  // }

  constructor(private homeService: DataService, private router: Router) { 
    super();
    this.current.data = 'home';
    this.homeService.getProgrammingLanguages().subscribe(
      (response: any) => {
        console.log(response);
        this.products = this.products.concat(response.data);
      }
    );
  }

  navigating(){
    $('#examplelogin').modal('hide');
    this.router.navigate(['/categories'])
  }

  ngOnInit(): void {
    
  }
}
