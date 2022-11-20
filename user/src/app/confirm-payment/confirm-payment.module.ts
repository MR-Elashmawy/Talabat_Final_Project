import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../cart/cart.module';
import { confirmComponent } from './components/confirm.component';



@NgModule({
  declarations: [
    confirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartModule
  ]
})
export class ConfirmPaymentModule { }
