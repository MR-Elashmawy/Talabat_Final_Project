import { Title } from '@angular/platform-browser';
import { OrdersService } from './../../../../Services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {

  allOrders:any;
  orderCreatedDate:any;
  orderUpdatedDate:any;
  loading:boolean = false;
  searchText:any;
  constructor(private title: Title, private orderService: OrdersService) {
    title.setTitle('Pending Orders');
   }  
  ngOnInit(): void {
    this.loading = true;
    this.orderService.getAllOrders().subscribe(
    (data)=>{            
      this.allOrders = data;   
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
