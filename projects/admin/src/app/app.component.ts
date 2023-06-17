import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasePage } from '../core/base-page';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BasePage {
  title = 'admin';
  additemForm: FormGroup;
  types: any = [{
    category: 'Fruit'
  }, {
    category: 'Vegetable'
  },
  {
    category: 'Diary'
  },
  {
    category: 'Baked goods'
  },
  {
    category: 'Meat'
  },
  {
    category: 'Herbs'
  }]
  products: any = []
  categories: any = []
  constructor(private homeService: DataService, private router: Router, private cdr: ChangeDetectorRef) {
     super();
    this.additemForm = new FormGroup({
      category: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      imageurl: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
    let gettingcategory: any = localStorage.getItem('category');
    let converting = JSON.parse(gettingcategory);
    this.homeService.getProgrammingLanguages().subscribe(
      (response: any) => {
        console.log(response);
        this.products = response.data.filter((element: any) => element.category === converting);
        console.log('category', converting);
        this.cdr.markForCheck();
      }
    );
  }
  goCategory(category: any) {
    localStorage.setItem('category', JSON.stringify(category));
    console.log('to see filter', category);
    this.router.navigate(['/categories']);
  }

  toAddItem() {
    if (this.additemForm.valid) {
      let check: any = {
        category: this.additemForm.value.category,
        Name: this.additemForm.value.Name,
        imageurl: this.additemForm.value.imageurl,
        price: this.additemForm.value.price,
        id: Math.round(Math.random() * 100000),
      }
      this.homeService.createProduct(check).subscribe(resp => console.log(resp));
    }
  }
  toUpload(event: any) {
    console.log('event', event.target.value, event);
  }
 
  modalTest(){
    
  }
}
