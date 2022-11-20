import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminsService } from './../../Services/admins.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = "";
  admins: any;
  email = "";
  password = "";

  constructor(private title:Title,private AdminsService: AdminsService, private authentication: AuthService, private router: Router) {
    title.setTitle('Login');

    if(localStorage.getItem('admin')){
      router.navigate(["/dashboard"]);

    } // logged in admin can't opent this page

  }

  ngOnInit(): void {
    this.AdminsService.getAdmins(this.email).subscribe(
      (data) => {        
        this.admins = data;        
      }
    );
  }

  login() {    
    for (let i = 0; i < this.admins.length; i++) {
      if (this.email == this.admins[i].email && this.password == this.admins[i].password) {
        localStorage.setItem('admin', JSON.stringify(this.admins[i].id));
        this.authentication.isLoggedIn = true;
        return this.router.navigateByUrl('/dashboard');
      }
    }
    return this.errorMsg = "Wrong email or password";

  }

}
