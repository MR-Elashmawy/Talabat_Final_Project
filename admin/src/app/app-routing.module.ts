import { AddCategoryComponent } from './Components/admin/categories/add-category/add-category.component';
import { CategoryItemComponent } from './Components/admin/categories/category-item/category-item.component';
import { AllCategoriesComponent } from './Components/admin/categories/all-categories/all-categories.component';
import { ProductItemComponent } from './Components/admin/products/product-item/product-item.component';
import { ProductUpdateComponent } from './Components/admin/products/product-update/product-update.component';
import { ProductAddComponent } from './Components/admin/products/product-add/product-add.component';
import { ProductsComponent } from './Components/admin/products/products/products.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderItemComponent } from './Components/admin/orders/order-item/order-item.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AllOrdersComponent } from './Components/admin/orders/all-orders/all-orders.component';
import { OrdersPendingComponent } from './Components/admin/orders/orders-pending/orders-pending.component';
import { OrdersAcceptedComponent } from './Components/admin/orders/orders-accepted/orders-accepted.component';
import { OrdersRejectedComponent } from './Components/admin/orders/orders-rejected/orders-rejected.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"", component:AdminHomeComponent, canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:AdminHomeComponent, canActivate:[AuthGuard]},
  {path:"dashboard/services", component:AllCategoriesComponent, canActivate:[AuthGuard]},
  {path:"dashboard/services/edit/:id", component:CategoryItemComponent, canActivate:[AuthGuard]},
  {path:"dashboard/services/add", component:AddCategoryComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products", component:ProductsComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/add", component:ProductAddComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/:id", component:ProductItemComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/edit/:id", component:ProductUpdateComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders", component:AllOrdersComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/pending", component:OrdersPendingComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/accepted", component:OrdersAcceptedComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/rejected", component:OrdersRejectedComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/:id", component:OrderItemComponent, canActivate:[AuthGuard]},
  {path:"**", component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
