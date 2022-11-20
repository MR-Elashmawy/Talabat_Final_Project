import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private myClient: HttpClient) {

   }

  private baseURL = "http://127.0.0.1:8000/api/users";

  getAdmins(id:string){
    return this.myClient.get(this.baseURL+ "/"+ id );
  }

}
