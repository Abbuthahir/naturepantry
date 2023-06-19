import { Component } from '@angular/core';
import * as moment from 'moment-timezone';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  selectedCountryCode: string = '';
  phoneNumber: string = '';
  globalmoment: any;
constructor(){

  this.globalmoment = moment.tz.guess().format('YYYY-MM-DD');
  console.log('aashi', this.globalmoment);
  
}
  
  countryCodes = [
    { name: 'United States', code: '1' },
    { name: 'Canada', code: '1' },
    { name: 'Mexico', code: '52' },
    // Add more country codes as needed
  ];

 
}

