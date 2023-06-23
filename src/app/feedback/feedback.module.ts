import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

const routes: Routes = [{
    path: '',
    component: FeedbackComponent
}]
@NgModule({
    declarations: [
        FeedbackComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        DataService
      ]
})
export class FeedbackModule { }