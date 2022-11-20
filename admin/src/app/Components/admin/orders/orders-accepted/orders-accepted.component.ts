import { Title } from '@angular/platform-browser';
import { OrdersService } from './../../../../Services/orders.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-accepted',
  templateUrl: './orders-accepted.component.html',
  styleUrls: ['./orders-accepted.component.css']
})
export class OrdersAcceptedComponent implements OnInit {

 
  allOrders:any;
  orderCreatedDate:any;
  orderUpdatedDate:any;
  loading:boolean = false;
  searchText:any;
  constructor(private title: Title, private orderService: OrdersService) {
    title.setTitle('Accepted Orders');
   }

  ngOnInit(): void {
    this.loading = true;
    this.orderService.getAllOrders().subscribe(
    (data)=>{
      this.allOrders = data;
      console.log(this.allOrders);
      
      this.orderCreatedDate = this.allOrders.created_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      this.orderUpdatedDate = this.allOrders.updated_at_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      this.loading = false;
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}