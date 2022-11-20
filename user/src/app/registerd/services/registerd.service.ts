import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterdService {

  private baseURL = "http://127.0.0.1:8000/api/users";

  constructor(private myClient: HttpClient) {
  }
  addNewUser(newUser: any) {
    return this.myClient.post(this.baseURL, newUser);
  }



  getUser(id:string){
    return this.myClient.get(this.baseURL+ "/"+ id );
  }


}
