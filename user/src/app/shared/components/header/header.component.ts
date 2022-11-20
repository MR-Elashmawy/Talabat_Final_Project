import { Router } from '@angular/router';
import { AuthService } from './../../../auth/auth.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  constructor(public authentication:AuthService, private router:Router) {
    if(localStorage.getItem('user')){
      this.loggedIn = true;
    }
  }// check of user logged in or not
  logout(){
    this.authentication.isLoggedIn = false;
    localStorage.setItem('user', '');

  } //end of logout
  getProductLength(){
    let cartProducts = [];
    
    if("cart" in localStorage){
      cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }

    if(!localStorage.getItem('user') ){
      return cartProducts.length = 0;
    }

    return cartProducts.length;

  }
  ngOnInit(): void {
  }

}
