import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  userID:any;
  orderID :any;
  orderDetails:any;
  products:any = [];
  constructor(private title: Title, private myActivated: ActivatedRoute, private myService: ProfileService ) {
    title.setTitle("Order Details");
    this.userID=JSON.parse( localStorage.getItem("user")!);
    this.orderID = myActivated.snapshot.params['id'];  // get order id from url

   }

  ngOnInit(): void {
    this.myService.getOrderDetails(this.orderID).subscribe(
      (data)=>{
        this.orderDetails = data;
                    
      for(let i = 0; i < this.orderDetails.length; i++ ){
        this.myService.getproduct(this.orderDetails[i].product_id).subscribe(
          (data)=>{
            this.products.push(data);
          }
          );
          
        }
      }
      );      

  }

}
