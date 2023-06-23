import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

const routes: Routes = [{
  path:'',
  component: AdminComponent
}]



@NgModule({
  declarations: [
    AdminComponent  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    DataService
  ]
})
export class AdminModule { }
