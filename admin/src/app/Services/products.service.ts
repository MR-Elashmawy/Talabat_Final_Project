import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myClient: HttpClient) {

   }

  private BASE_URL = "http://127.0.0.1:8000/api/products";
  
  getAllProducts(){
    return this.myClient.get(this.BASE_URL);//body
  }
  getProductByID(id:number){
    return this.myClient.get(`${this.BASE_URL}/${id}`);
  }

  addNewProduct(newProduct:any){
    return this.myClient.post(this.BASE_URL, newProduct);
  }

  updateProduct(id:number, productUpdated={}){
    return this.myClient.put(this.BASE_URL+"/"+ id, productUpdated);
  }

  deleteProduct(id:number){
    return this.myClient.delete(this.BASE_URL+"/"+ id);
  }

  }

