import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CartModule } from '../cart/cart.module';
import { CartComponent } from '../cart/components/cart.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
