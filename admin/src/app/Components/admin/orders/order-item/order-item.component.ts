import { Title } from '@angular/platform-browser';
import { OrdersService } from './../../../../Services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  id:any;  
  order:any;
  msg = "";
  error = "";
  orderDateTime:any;
  loading:boolean = false;


  allStatus = ['Pending', 'Accepted', 'Rejected']; // order status options

  constructor(private title: Title, private myActivated: ActivatedRoute, private orderService: OrdersService) { 
    title.setTitle('Order Details');
    this.id = myActivated.snapshot.params['id'];  // get order id from url
      
  }

  ngOnInit(): void {
    this.loading = true;
    this.orderService.getSpecificOrder(this.id).subscribe(
      (data)=>{
        this.order = data;
        console.log(this.order);
        this.orderDateTime = this.order.updated_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        this.loading = false;
        
      }
      );
  }

  updateOrder(date:any, price:any, status:any){
    if(!price.value || !price.value  || !status.value){
      return this.showFailed("All fields required");

    } // form data invalid

    let updatedOrder = {
      date:date.value,
      total_price:price.value,
      status:status.value
    }
    this.orderService.updateOrder(this.id, updatedOrder).subscribe();
    this.showSuccess("Order Has Been Updated Successfully");
  }
  
  showSuccess(msg="") {
    this.msg = msg;
    setTimeout(() => {
      this.msg = "";
    }, 1500);
  }

  showFailed(err = "") {
    this.error = err;
    setTimeout(() => {
      this.error = "";
    }, 2000);
  }


}
