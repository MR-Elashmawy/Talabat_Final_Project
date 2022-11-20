import { GuideComponent } from './guide/guide/guide.component';
import { OrderDetailsComponent } from './profile/components/order-details/order-details.component';
import { ProfileComponent } from './profile/components/profile.component';
import { CartComponent } from './cart/components/cart.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ContactComponent } from './contact/components/contact.component';
import { LogInComponent } from './log-in/components/log-in.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { RegisterdComponent } from './registerd/components/registerd.component';
import { HomeComponent } from './U.home/components/home.component';
import { UpdateProfileComponent } from './profile/components/update-profile/update-profile.component';
import { ProfileOrdersComponent } from './profile/components/profile-orders/profile-orders.component';
import { confirmComponent } from './confirm-payment/components/confirm.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"services", component:AllProductsComponent},
  {path:"services/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"confirm", component:confirmComponent, canActivate:[AuthGuard]},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LogInComponent},
  {path:"register", component:RegisterdComponent},
  {path:"profile", component:ProfileComponent, canActivate:[AuthGuard]},
  {path:"updateProfile/:id",component:UpdateProfileComponent, canActivate:[AuthGuard]},
  {path:"orders" , component:ProfileOrdersComponent, canActivate:[AuthGuard]},
  {path:"userguide" , component:GuideComponent},
  {path:"orders/:id" , component:OrderDetailsComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
