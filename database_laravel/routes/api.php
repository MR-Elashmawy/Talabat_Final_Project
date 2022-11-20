<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\MenuCategoryController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductOrderController;
use App\Models\Product;
use App\Models\ProductOrder;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('orders', OrderController::class); // order api
Route::resource('order-items', ProductOrderController::class); // order details api
Route::get('orders-user/{id}',[OrderController::class,'userOrders']); //get user orders
Route::get('orders-status/{status}',[OrderController::class,'countPending']); //count number of orders depends on status
Route::get('users', [UserController::class, 'index']); // get users api
Route::get('users/{id}', [UserController::class, 'show']); // get all users api
Route::get('users-default', [UserController::class, 'countDefaultUsers']); // count default users api
Route::put('users/{id}', [UserController::class, 'update']); // get user api
Route::post('users', [UserController::class, 'store']); // register new user api
Route::resource('categories', CategoryController::class); // categories api
Route::resource('menu-categories', MenuCategoryController::class); // menu categories api
Route::get('filter-categories/{id}', [CategoryController::class, 'getCategoryFilter']); // get filter categories api
Route::resource('products', ProductController::class); // products api
Route::get('filter-products/{id}', [ProductController::class, 'getProductFilter']); // get filter products api
Route::get('categories-type/{type}', [CategoryController::class, 'getCategoriesBytype']); // get products by category
Route::get('category-type/{id}', [CategoryController::class, 'getCategoryType']); // get category type
Route::get('order-items-details/{orderid}', function($orderID){
    $ordersDetails = ProductOrder::where('order_id', $orderID)->get();
    return $ordersDetails;
}); // order details api



