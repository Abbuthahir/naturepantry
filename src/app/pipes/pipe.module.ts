import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDateTimePipe } from './custom-pipe';



@NgModule({
  declarations: [CurrentDateTimePipe],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrentDateTimePipe
  ],
  providers:[CurrentDateTimePipe]
})
export class PipeModule { }
