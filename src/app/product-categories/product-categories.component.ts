import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { json } from 'express';
import { Base } from '../core/base';
import { BasePage } from '../core/base-page';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoriesComponent extends BasePage {
  products: any = [];
  constructor(private homeService: DataService, private cdr: ChangeDetectorRef) {
    super();
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
}
