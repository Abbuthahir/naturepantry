import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoriesComponent } from './product-categories.component';
import { DataService } from '../data.service';


const routes: Routes = [{
  path: '',
  component: ProductCategoriesComponent
}]



@NgModule({
  declarations: [
    ProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DataService
  ]
})
export class ProductCategoriesModule { }
