import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private baseURL = "http://127.0.0.1:8000/api/users";

  constructor(private myClient: HttpClient) { 

  }

  getUser(id:string){
    return this.myClient.get(this.baseURL+ "/"+ id );
  }
}
