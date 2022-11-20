import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { RegisterdService } from './../services/registerd.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerd',
  templateUrl: './registerd.component.html',
  styleUrls: ['./registerd.component.css']
})
export class RegisterdComponent implements OnInit {
  registerForm: FormGroup | any;
  userImage: any;
  imgExtensionInvalid = false;
  userHasImage = false;
  errorMsg = "";
  successMsg = "";
  passwordError = "";
  newUser = { first_name: "", last_name: "", email: "", password: "", gender: "", image: "", phone:"", city :"", address: ""};
  oldUsers:any;
  duplicatedEmail = "";
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterdService,
    private router: Router,
    private titlePage: Title) {
    titlePage.setTitle("Register");
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      gender: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    }) // validate on form inputs


    // get all registered users
    this.registerService.getUser(this.email.value).subscribe(
      (data) => {
        this.oldUsers = data;
      }
    );

  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get gender() {
    return this.registerForm.get('gender');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get address() {
    return this.registerForm.get('address');
  }

  passwordMatching() {
    if (this.password.value !== this.confirmPassword.value) {
      return false;
    }
    return true;
  } // check if passowrd and confirm password matching


  emailExists(){
    for (let i = 0; i < this.oldUsers.length; i++) {
      // check if user exists in db or not
      if (this.email.value == this.oldUsers[i].email) {
        return true;
      }
    } // end of loop on users in json db
    return false;
  }

  


  imageSelected(event: any) {
    this.userImage = event.target.files[0];
    if (this.userImage.type !== "image/jpg" && this.userImage.type !== "image/jpeg" && this.userImage.type !== "image/png") {
      this.userHasImage = true;
      this.imgExtensionInvalid = true;
      return this.errorMsg = "Image extension must be (jpg, png)";
    } // user uploaded invalid image extension

    this.userHasImage = true;
    this.imgExtensionInvalid = false;
    const reader = new FileReader();
    reader.readAsDataURL(this.userImage);
    reader.onload = () => {
      this.userImage = reader.result;
    } // user uploaded image
    return this.userImage;

  }



  register() {

    if(this.emailExists()){
      this.duplicatedEmail = "This email already exists";
      return this.registerForm.invalid;
    } //email already exists

    if (this.registerForm.invalid) { // invalid form data
      this.registerForm.markAllAsTouched();
    } else {

      if (!this.passwordMatching()) {
        this.passwordError = "Password and confirm password doesn't match";
        return this.registerForm.invalid;
      } // password and confirm password doesn't match

      if (this.userHasImage && this.imgExtensionInvalid) {
        return this.registerForm.invalid;
      } // user upload invalid image

      if (this.userHasImage) {
        this.userImage; // image name

      } // user upload valid image

      if (!this.userHasImage) {
        this.userImage = 'assets/images/users/default_user.png';
      } // user doesn't upload image


      this.newUser.first_name = this.firstName.value,
      this.newUser.last_name = this.lastName.value,
      this.newUser.password = this.password.value,
      this.newUser.email = this.email.value,
      this.newUser.gender = this.gender.value,
      this.newUser.image = this.userImage;
      this.newUser.phone = this.phone.value;
      this.newUser.city = this.city.value;
      this.newUser.address = this.address.value;

      this.registerService.addNewUser(this.newUser).subscribe();
      this.successMsg = "Registeration Success";
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500); //redirct to login page
      this.registerForm.reset();
    }
  } // end of register

} // end of class