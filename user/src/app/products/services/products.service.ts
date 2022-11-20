import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient ) {}

  getAllProducts(){
    return this.http.get(environment.baseapi + '/products');
    }
  getAllCategories(){
    return this.http.get(environment.baseapi + '/categories');
    }
  getfiletrcategory(keyword:string){
    return this.http.get(environment.baseapi + '/filter-categories/' + keyword);
    }
    getfiletrproduct(id:number){
    return this.http.get(environment.baseapi + '/filter-products/' + id);
    }
    getProductById(id:any){
    return this.http.get(environment.baseapi + '/categories/' + id);
    }
  }

