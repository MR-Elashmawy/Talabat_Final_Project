import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent implements OnInit {

  allOrders:any=[];
  userID:any;
  deletedOrder:any=[];
  orderDateTime:any;
  order:any;

  constructor(private titlePage: Title,private myActivated: ActivatedRoute, private profileService: ProfileService,private router: Router) {
    titlePage.setTitle("Orders");
    this.userID=JSON.parse( localStorage.getItem("user")!);

   }

  ngOnInit(): void {

    this.profileService.getorderByID(this.userID).subscribe(
      
    (data)=>{
      this.allOrders = data;      
      this.orderDateTime=this.allOrders.created_at=new Date().toLocaleDateString();
    },
    (error)=>{
      console.log(error);
    }
    );
  }


  deletePending(order:any){
    this.profileService.getOrder(order).subscribe((data)=>{
      this.order = data;      
      this.profileService.deleteItems(this.order.id).subscribe((data)=>{
        console.log(data);
        
      });
      this.profileService.deletePending(order).subscribe((result)=>{
    })
    });
    return this.ngOnInit();
  }
}
