import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  user:any;
  userID:any;
  base64:any='';
  form:FormGroup|any;
  constructor(private titlePage: Title,private myActivated: ActivatedRoute, public profileService:ProfileService,private router: Router) {
    titlePage.setTitle("Update Profile");
    this.userID= localStorage.getItem('user');
  }

  ngOnInit(): void {
    let that = this;
    this.profileService.getuserByID(this.userID).subscribe(
      {
        next(data){
          that.user= data;
        },
        error(err){console.log(err)}
      }
    )
  }

  getImagePath(event:any){
    const file=event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.base64=reader.result;
      this.form.get('image')?.setValue(this.base64);
    }
  }

  updateUser(first_name:any,last_name:any, email:any,gender:any,password:any){
    let updatedUser = {
    first_name:first_name.value,
    last_name:last_name.value,
    email:email.value,
    gender:gender.value,
    password:password.value,
    image:this.base64
    }
    this.profileService.updateUser(this.userID, updatedUser).subscribe();
    alert("Profile Updated successfully");
    setTimeout(() => {
      this.router.navigate(['/updateProfile/' + this.userID]);
    }, 1500);
  }

}

