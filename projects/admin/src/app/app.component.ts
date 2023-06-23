import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin-service';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: any = [];
  additemForm: FormGroup;
  // types: any = [{
  //   category: 'Fruit'
  // }, {
  //   category: 'Vegetable'
  // },
  // {
  //   category: 'Diary'
  // },
  // {
  //   category: 'Baked goods'
  // },
  // {
  //   category: 'Meat'
  // },
  // {
  //   category: 'Herbs'
  // }];
  constructor(private homeService: AdminService) {
    this.homeService.getProgrammingLanguages().subscribe(
      (response: any) => {
        console.log(response);
        this.products = this.products.concat(response.data);
        console.log('prod', this.products);
      }
    );

    this.additemForm = new FormGroup({
      category: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      imageurl: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })

  }
  toAddItem() {
    if (this.additemForm.valid) {
      let check: any = {
        id: Math.round(Math.random() * 100000),
        category: this.additemForm.value.category,
        Name: this.additemForm.value.Name,
        imageurl: this.additemForm.value.imageurl,
        price: this.additemForm.value.price,
      }
      this.homeService.createProduct(check).subscribe(resp => console.log(resp));
    }
  }
  // toUpload(event: any) {
  //   console.log('event', event.target.value, event);
  // }
  toRemove(id: Number) {
    this.homeService.removeProduct(id).subscribe(resp => console.log(resp));
  }
}
