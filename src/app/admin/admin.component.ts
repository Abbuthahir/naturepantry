import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../core/base-page';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BasePage{
// additemForm: FormGroup

  products: any = [];


  constructor(private homeService: DataService) {
    super();
    this.current.admin='admin';
    console.log('admin', this.current.admin);
    this.homeService.getProgrammingLanguages().subscribe(
      (response: any) => {
        console.log(response);
        this.products = this.products.concat(response.data);
        console.log('prod', this.products);
      }
    );

    // this.additemForm = new FormGroup({
    //   category: new FormControl('', Validators.required),
    //   name: new FormControl('', Validators.required),
    //   image: new FormControl('', Validators.required),
    //   price: new FormControl('', Validators.required)
    // })
   
  }
  // toAddItem(){

  //   if(this.additemForm.valid){
  //     let check:any={
  //       category:this.additemForm.value.category,
  //       name:this.additemForm.value.name,
  //       image:this.additemForm.value.image,
  //       price:this.additemForm.value.price
  //     }
  //     this.homeService.createProduct(check).subscribe(resp => console.log(resp));


  //   }
  // }

toRemove(id: Number){
  this.homeService.removeProduct(id).subscribe(resp => console.log(resp));
}
}
