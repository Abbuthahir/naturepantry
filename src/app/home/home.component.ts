import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasePage } from '../core/base-page';
import { DataService } from '../data.service';
import { trigger, state, transition, style, animate } from '@angular/animations'
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('imageAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms', style({ transform: 'tranlateX(0)' }))
      ])
    ]),
    trigger('cubeAnimation', [
      state('front', style({ transform: 'rotateY(0)' })),
      state('right', style({ transform: 'rotateY(-90deg)' })),
      state('back', style({ transform: 'rotateY(-180deg)' })),
      state('left', style({ transform: 'rotateY(-270deg)' })),
      transition('* <=> *', animate('500ms ease-in-out'))
    ])
  ]
})
export class HomeComponent extends BasePage implements OnInit {
  products: any = [];
  cubeState = 'front';
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

  navigating() {
    const modal = new bootstrap.Modal('#examplelogin')
    modal.hide();
    this.router.navigate(['home'])
  }
  ngOnInit(): void {

  }
}
