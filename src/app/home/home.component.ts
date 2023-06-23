import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasePage } from '../core/base-page';
import { DataService } from '../data.service';
declare var bootstrap : any;

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
    // this.homeService.serviceCurrent = 'home';
    this.current.data = 'home';
    this.current.admin = '';
    console.log(this.current.admin);
    this.current.nav = true;
    console.log('nav', this.current.data);
    this.homeService.getProgrammingLanguages('').subscribe(
      (response: any) => {
        console.log(response);
        this.products = this.products.concat(response.data);
      }
    );
  }

  navigating(){
    const modal = new bootstrap.Modal('#examplelogin')
    modal.hide();
    this.router.navigate(['home'])
  }
  ngOnInit(): void {
    
  }
}
