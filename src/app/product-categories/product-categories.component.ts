import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
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
  cartData: any[] = [];
  category: any;
  routeParams$: Observable<any>;
  constructor(private homeService: DataService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {
    super();
    this.category = this.route.snapshot.params['id'];
    this.routeParams$ = this.route.params.pipe(
      tap(() => {
          console.log('params', this.route.snapshot.params['id']);
          this.category = this.types.find(type => type.value === this.route.snapshot.params['id'])?.category;
          this.current.nav = true;
          this.current.data = 'home';
          this.homeService.getProgrammingLanguages(this.category).subscribe(
            (response: any) => {
              console.log('filter', response);
              this.products = response.data;
              this.cdr.markForCheck();
            }
          );
      })
  );
  }
  addingToCart(data: any) {
    const cartItems: any = this.homeService.getCart();
    if (cartItems) {
      this.cartData.push(data);
    }
    this.homeService.addCart(this.cartData);
  }
}
