import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.scss']
})
export class BuynowComponent {
  selectedOption: string ='creditCard';
  upi: string = 'upi';
  creditCard: string = 'creditCard';
  cashOnDelivery: string = 'cashOnDelivery';
  upiCode: string = 'example@upi';
  linkedinUrl = 'https://www.linkedin.com/in/abbu-thahir-001635159/';
  creditCardForm: FormGroup;
  cartData: any[] = [];

  constructor(public homeService: DataService){
    this.creditCardForm = new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      holderName: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required)
    })
    this.cartData = this.homeService.getCart();
  }
  formatCardNumber(event: any) {
    const input = event.target as HTMLInputElement;
    let cardNumber = input.value;
    // Remove non-numeric characters
    cardNumber = cardNumber.replace(/\D/g, '');
    // Add space after every four digits
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = cardNumber;
  }
  grandTotal(): number {
    let totalAmount = 0;
    for (let cart of this.cartData) {
      totalAmount += cart.totalPrice;
    }
    return totalAmount;
  }
}
