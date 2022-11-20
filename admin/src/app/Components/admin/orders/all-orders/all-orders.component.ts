import { Title } from '@angular/platform-browser';
import { OrdersService } from './../../../../Services/orders.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  allOrders:any;
  orderCreatedDate:any;
  orderUpdatedDate:any;
  searchText:any;
  loading: boolean = false;
  

  constructor(private title: Title, private orderService: OrdersService) {
    title.setTitle("All Orders");
   }

  ngOnInit(): void {
    this.loading=true;
    this.orderService.getAllOrders().subscribe(
    (data)=>{            
      this.allOrders = data;
      this.orderCreatedDate = this.allOrders.created_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      this.orderCreatedDate = this.allOrders.updated_at_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      this.loading = false;
    });
  }

}
