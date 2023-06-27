import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuynowComponent } from './buynow.component';
import { DataService } from '../data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

const routes: Routes = [{
  path: '',
  component:BuynowComponent
}]


@NgModule({
  declarations: [BuynowComponent],
  imports: [
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes) 
  ],
  providers: [DataService]
})
export class BuynowModule { }
