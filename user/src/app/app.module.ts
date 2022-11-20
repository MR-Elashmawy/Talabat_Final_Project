import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/components/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactComponent } from './contact/components/contact.component';
import { AboutComponent } from './about/components/about.component';
import { LogInComponent } from './log-in/components/log-in.component';
import { RegisterdComponent } from './registerd/components/registerd.component';
import { HomeComponent } from './U.home/components/home.component';
import { confirmComponent } from './confirm-payment/components/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    LogInComponent,
    RegisterdComponent,
    confirmComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,

  ],
  providers: [[AuthService, AuthGuard]],
  bootstrap: [AppComponent]
})
export class AppModule { }
