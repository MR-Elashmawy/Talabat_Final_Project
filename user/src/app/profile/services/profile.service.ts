import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private myClient: HttpClient,private router: Router, private route: ActivatedRoute) { }
  private BASE_URL_USER = "http://127.0.0.1:8000/api/users";
  private BASE_URL_ORDERS = "http://127.0.0.1:8000/api/orders";
  private BASE_URL_USER_ORDERS = "http://127.0.0.1:8000/api/orders-user";
  private BASE_URL_ORDER_DETAILS = "http://127.0.0.1:8000/api/order-items-details";
  private BASE_URL_ORDER_ITEMS = "http://127.0.0.1:8000/api/order-items";
  private BASE_URL_PRODUCT_DETAILS = "http://127.0.0.1:8000/api/products";

  getuserByID(id:number){
    return this.myClient.get(`${this.BASE_URL_USER}/${id}`);
  }
  updateUser(id:number, userUpdated={}){
    return this.myClient.put(this.BASE_URL_USER+"/"+ id, userUpdated);
  }
  
  
  getAllOrders(){
    return this.myClient.get(this.BASE_URL_ORDERS);
  }
  
  getorderByID(id:number){
    return this.myClient.get(`${this.BASE_URL_USER_ORDERS}/${id}`);
  }
  deletePending(id:number){
    return this.myClient.delete(this.BASE_URL_ORDERS+"/"+ id);
  }
  
  
  getOrderDetails(id:number){
    return this.myClient.get(`${this.BASE_URL_ORDER_DETAILS}/${id}`);
  }

  getOrder(id:number){
    return this.myClient.get(`${this.BASE_URL_ORDERS}/${id}`);

  }

  getproduct(id:number){
    return this.myClient.get(`${this.BASE_URL_PRODUCT_DETAILS}/${id}`);
  }

  deleteItems(id:any){
    return this.myClient.delete(this.BASE_URL_ORDER_ITEMS+"/"+ id);
  }


}
