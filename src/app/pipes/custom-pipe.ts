import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment-timezone";

@Pipe({
    name: 'currentDateTime'
})

export class CurrentDateTimePipe implements PipeTransform {
    transform(date: string): string {
        console.log('trans', date);
      return moment().utc().format('YYYY-MM-DD HH:mm:ss z');
    }
  }