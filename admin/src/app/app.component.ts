import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Talabat Dashboard';

  loggedOut = false;
  constructor(public authentication:AuthService, private router: Router){
    if(localStorage.getItem('admin')){
      authentication.isLoggedIn = true;
    }
  }// check of user logged in or not

  logout(){
    this.authentication.isLoggedIn = false;
    localStorage.setItem('admin', '');
    this.router.navigate(['/login']);
    
  } //end of logout

}
