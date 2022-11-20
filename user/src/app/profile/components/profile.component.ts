import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID:any;
  user:any;//undefined
  constructor(private titlePage: Title,private myActivated: ActivatedRoute, private profileService: ProfileService,private router: Router) {
    titlePage.setTitle("Profile");
    this.userID=JSON.parse( localStorage.getItem("user")!);
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
}
