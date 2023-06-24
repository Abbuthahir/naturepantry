import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasePage } from './core/base-page';
import { DataService } from './data.service';
import { CurrentDateTimePipe } from './pipes/custom-pipe';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BasePage {
  changeColor = false;
  currentData: any;
  title = 'naturepantry';
  offCanvas: any;
  categories: any = [];
  
  constructor(private homeService: DataService, private router: Router, private currentDateTimePipe: CurrentDateTimePipe) {
    super();
    this.homeService.serviceCurrent = '';
    this.current.data = this.homeService.serviceCurrent;
    console.log(this.homeService.serviceCurrent);
    this.current.nav = false;
  }
  showOffcanvas() {
    this.offCanvas = new bootstrap.Offcanvas('#offcanvasExample');
    this.offCanvas.show();
  }
  goCategory(category: any) {
    // localStorage.setItem('category', JSON.stringify(category));
    // this.homeService.getProgrammingLanguages()
    let ctgy: any = category.split(' ').join('');
    // ctgy = ctgy.toLowerCase();
    this.offCanvas.hide();
    console.log('ctgy', ctgy);
    this.router.navigate([`/categories/${ctgy}`]);
  }
  // toAddItem() {
  //   if (this.additemForm.valid) {
  //     let check: any = {
  //       category: this.additemForm.value.category,
  //       Name: this.additemForm.value.Name,
  //       imageurl: this.additemForm.value.imageurl,
  //       price: this.additemForm.value.price,
  //       id: Math.round(Math.random() * 100000),
  //     }
  //     this.homeService.createProduct(check).subscribe(resp => console.log(resp));
  //     console.log('check', check);
  //   }
  // }
}
