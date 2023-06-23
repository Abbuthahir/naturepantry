import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgColorDirective } from '../directives/bg-color.directive';
import { AdminService } from '../admin-service';

@NgModule({
  declarations: [
    AppComponent,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
