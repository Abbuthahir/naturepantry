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
    //     let cartDatas = homeService.getCart();
    //     if (cartDatas) {
    //       this.homeService.cartData = [];
    //       cartDatas.forEach((cartData: any) => {
    // this.homeService.cartData.concat(cartData);
    //       });
    //       }else{
    //         this.homeService.cartData.push(this.homeService.cartData);
    //       }
    //         console.log('cartData', this.homeService.cartData);
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
    if (this.homeService.cartData.length) {
      // this.total = this.homeService.cartData[0].price;
    }
  }
  removeCart(i: any) {
    this.homeService.cartData.splice(i, 1);
    this.homeService.addCart(this.homeService.cartData);
  }
  increaseNumber() {
    // this.numberValue++;
  }
  decreaseNumber() {
    // this.numberValue--;
  }
  quantity(event: any, i: any) {
    // console.log(event);
console.log(event.target.value);
    this.cartData[i].totalPrice = this.cartData[i].price * event.target.value;

    //  this.total = this.homeService.cartData[i].price * this.numberValue;
  }
}
