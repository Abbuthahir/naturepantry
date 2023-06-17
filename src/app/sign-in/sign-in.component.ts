import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $ : any;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;
  products: any = [];
  constructor(private homeService: DataService, public router: Router) { 
    this.homeService.getProgrammingLanguages().subscribe(
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
      this.router.navigate(['#examplelogin'])
    }else{
      alert("Please fill all the required fields");
    }
  }

}
