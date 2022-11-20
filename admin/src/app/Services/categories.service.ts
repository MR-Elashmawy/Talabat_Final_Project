import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseURL = "http://127.0.0.1:8000/api/categories";
  private baseURL_categories = "http://127.0.0.1:8000/api/categories-type";
  private baseURL_type = "http://127.0.0.1:8000/api/category-type";
  
  // http://127.0.0.1:8000/api/categories
  constructor(private http:HttpClient) { }
  getCategories(){
   return this.http.get(this.baseURL);
  }
  saveCategory(data:any){
    return this.http.post(this.baseURL,data);
  }
  deleteCategory(id: any){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getCurrentCategory(id: any){
    return this.http.get(`${this.baseURL}/${id}`);
  }
  updateCategory(id: any,data: any){
    return this.http.put(`${this.baseURL}/${id}`,data);
  }


  getCategoriesBytype(type:any){
    return this.http.get(`${this.baseURL_categories}/${type}`);
  }


  getCategoryType(categoryID:any){
    return this.http.get(`${this.baseURL_type}/${categoryID}`);
  }


}
