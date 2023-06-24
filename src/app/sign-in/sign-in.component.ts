import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../core/base-page';
import { trigger, transition, style, animate } from '@angular/animations';
declare var $ : any;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [ 
    trigger('imageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('textAnimation2', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class SignInComponent extends BasePage {
  loginForm: FormGroup;
  signupForm: FormGroup;
  products: any = [];
  constructor(private homeService: DataService, public router: Router) { 
    super();
    this.current.signin = 'signin';
    this.current.admin = '';
    this.homeService.getProgrammingLanguages('').subscribe(
      (response: any) => {
        console.log(response);
        this.products = this.products.concat(response.data);
      }
    );

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
  })
  this.signupForm = new FormGroup({
    fnname: new FormControl('', Validators.required),
    lnname: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    usernameInput: new FormControl('', Validators.required),
    passwordInput: new FormControl('', Validators.required),

  })
  }

  navigating(){
    this.current.nav = true;
    if(this.loginForm.valid){
      $('#examplelogin').modal('hide');
      this.router.navigate(['/home'])
    }else{
      alert("Please enter all the fields");
    }
  }

  signing(){
    if(this.signupForm.valid){
      $('#exampleModal').modal('hide');
      // this.router.navigate(['#examplelogin'])
    }else{
      alert("Please fill all the required fields");
    }
  }

}
