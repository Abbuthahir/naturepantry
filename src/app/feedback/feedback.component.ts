import { Component } from '@angular/core';
import * as moment from 'moment-timezone';
import { BasePage } from '../core/base-page';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent extends BasePage {
  selectedCountryCode: string = '';
  phoneNumber: string = '';
  selectedEmoticon: string = '';
  selectedCountry = '';
  selectedFind = '';
  countryCodes = [
    { country: 'Afganistan +93' },
    { country: 'Aland Islands +358' },
    { country: 'India +91' },
    { country: 'Albania +355' },
    { country: 'Algeria +213' }
  ];
  emoticons = [
    { icon: '\u{1F600}', value: 'Good' },
    { icon: '😐', value: 'Average' },
    { icon: '😞', value: 'Bad' },
  ];
  findus = ['Friends', 'Social Media', 'Others'];
  selectEmoticon(emoticon: string) {
    this.selectedEmoticon = emoticon;
  }
  globalmoment: any;
  constructor() {
    super();
    this.current.nav = true;
    this.current.data = 'home';

    // this.globalmoment = moment().format('YYYY-MM-DD');
    // const formattedDateTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    // console.log('moment', formattedDateTime)
  }
  selectedCode(c: any) {
    console.log('code', c);
    this.selectedCountry = c.country;
  }
  toFind(f: any) {
    console.log('find', f);
    this.selectedFind = f;
  }
}

