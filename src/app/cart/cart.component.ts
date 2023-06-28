import { Component } from '@angular/core';
import { BasePage } from '../core/base-page';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends BasePage {
  numberValue: any = 1;
  cartData: any[] = [];
  constructor(public homeService: DataService) {
    super();
    this.current.nav = true;
    this.current.data = 'home';
    console.log(this.homeService.getCart());
    this.cartData = this.homeService.getCart();
    // let cartDatas = homeService.getCart();
    // if (cartDatas) {
    //   this.homeService.cartData = [];
    //   console.log('cartDatas', cartDatas);
    //   cartDatas.forEach((val: any) => {
    //     this.homeService.cartData.push(val);
    //   });
    // }
    // else {
    //   this.homeService.cartData.push(this.homeService.cartData);
    // }
  }
  removeCart(i: any) {
    this.cartData.splice(i, 1);
    this.homeService.addCart(this.cartData);
  }
  quantity(event: any, i: any) {
     console.log(event);
    const quantity = event.target.value;
    console.log('quantity', quantity);
    this.cartData[i].quantity = quantity;
    this.cartData[i].totalPrice = this.cartData[i].price * quantity;
  }
  grandTotal(): number {
    let totalAmount = 0;
    for (let cart of this.cartData) {
      totalAmount += cart.totalPrice;
    }
    return totalAmount;
  }
  
}
