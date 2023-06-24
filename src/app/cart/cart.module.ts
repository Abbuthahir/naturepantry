import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { DataService } from '../data.service';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
  path: '',
  component: CartComponent
}]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DataService
  ]
})
export class CartModule { }
