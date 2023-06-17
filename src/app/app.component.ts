import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasePage } from './core/base-page';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BasePage {
  additemForm!: FormGroup;


  title = 'naturepantry';
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

  categories: any = []
  constructor(private homeService: DataService, private router: Router) {
    super();
    this.current.data = '';

    this.additemForm = new FormGroup({
         category: new FormControl('', Validators.required),
         Name: new FormControl('', Validators.required),
        imageurl: new FormControl('', Validators.required),
         price: new FormControl('', Validators.required)
      })
  }

  goCategory(category: any) {
    // this.homeService.getProgrammingLanguages().subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.categories = response.data.filter((element: any) => element.category === category);
    //     console.log('category', this.categories);
    //   }
    // );
    localStorage.setItem('category',JSON.stringify(category));
    console.log('to see filter', category);
    this.router.navigate(['/categories']);
  }

  toAddItem(){

    if(this.additemForm.valid){
      let check:any={
        category:this.additemForm.value.category,
        Name:this.additemForm.value.Name,
        imageurl:this.additemForm.value.imageurl,
        price:this.additemForm.value.price,
        id:  Math.round(Math.random() * 100000),
      }
      this.homeService.createProduct(check).subscribe(resp => console.log(resp));


    }
  }
toUpload(event: any){
  console.log('event', event.target.value, event);

}

}
