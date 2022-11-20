import { LoginComponent } from './Components/login/login.component';
import { CategoryItemComponent } from './Components/admin/categories/category-item/category-item.component';
import { AddCategoryComponent } from './Components/admin/categories/add-category/add-category.component';
import { AllCategoriesComponent } from './Components/admin/categories/all-categories/all-categories.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth.guard'
import { OrdersService } from './Services/orders.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AllOrdersComponent } from './Components/admin/orders/all-orders/all-orders.component';
import { OrderItemComponent } from './Components/admin/orders/order-item/order-item.component';
import { OrdersPendingComponent } from './Components/admin/orders/orders-pending/orders-pending.component';
import { OrdersRejectedComponent } from './Components/admin/orders/orders-rejected/orders-rejected.component';
import { OrdersAcceptedComponent } from './Components/admin/orders/orders-accepted/orders-accepted.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductsComponent } from './Components/admin/products/products/products.component';
import { ProductAddComponent } from './Components/admin/products/product-add/product-add.component';
import { ProductUpdateComponent } from './Components/admin/products/product-update/product-update.component';
import { ProductItemComponent } from './Components/admin/products/product-item/product-item.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AllOrdersComponent,
    OrderItemComponent,
    OrdersPendingComponent,
    OrdersRejectedComponent,
    OrdersAcceptedComponent,
    LoginComponent,
    AllOrdersComponent,
    ErrorComponent,
    AllCategoriesComponent,
    AddCategoryComponent,
    CategoryItemComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductItemComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    Ng2SearchPipeModule,


  ],
  providers: [
    OrdersService, [AuthService, AuthGuard],

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
