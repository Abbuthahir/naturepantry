import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { DataService } from '../data.service';
const routes: Routes = [{
  path: '',
  component: CartComponent
}]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DataService
  ]
})
export class CartModule { }
