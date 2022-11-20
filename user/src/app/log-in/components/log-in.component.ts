import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogInService } from './../services/log-in.service';
import { AuthService } from './../../auth/auth.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})


export class LogInComponent implements OnInit {
  loginForm: FormGroup | any;
  errorMsg = "";
  users: any;


  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loginService: LogInService,
    private router: Router,
    private titlePage: Title) {
      titlePage.setTitle("Login");
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    this.loginService.getUser(this.email.value).subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.invalid) { // invalid form data
      return this.loginForm.markAllAsTouched();
    } else {
      for (let i = 0; i < this.users.length; i++) {
        // check if user exists in db or not
        if (this.email.value == this.users[i].email && this.password.value == this.users[i].password) {
          localStorage.setItem('user', JSON.stringify(this.users[i].id));
          this.authService.isLoggedIn = true;
          return this.router.navigateByUrl('/');  
        }
      } // end of loop on users in json db

    }
    return this.errorMsg = "Wrong email or password"; // user not found

  }
}
