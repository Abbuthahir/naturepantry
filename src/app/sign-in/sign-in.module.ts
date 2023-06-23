import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

const routes: Routes = [{
  path: 'sign-in',
  component: SignInComponent
},
{
  path: '',
  redirectTo: 'sign-in',
  pathMatch: 'full'
}]

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule

  ],
  providers: [
    DataService
  ]
})
export class SignInModule { }
