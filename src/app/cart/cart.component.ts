import { Component } from '@angular/core';
import { BasePage } from '../core/base-page';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends BasePage {
  constructor(public homeService: DataService) {
    super();
    this.current.nav = true;
   this.current.data = 'home';
    let cartDatas = homeService.getCart();
    if (cartDatas) {
      this.homeService.cartData = [];
      cartDatas.forEach((cartData: any) => {
this.homeService.cartData.concat(cartData);
      });
      }else{
        this.homeService.cartData.push(this.homeService.cartData);
      }
        console.log('cartData', this.homeService.cartData);
      
    
  }

}
