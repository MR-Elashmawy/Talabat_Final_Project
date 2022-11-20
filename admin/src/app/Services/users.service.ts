import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient: HttpClient) {

  }

  private baseURL = "http://127.0.0.1:8000/api/users-default";

  countUsers(){
    return this.myClient.get(this.baseURL);
  }


}
