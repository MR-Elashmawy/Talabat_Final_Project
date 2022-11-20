import { Title } from '@angular/platform-browser';
import { OrdersService } from './../../../../Services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-rejected',
  templateUrl: './orders-rejected.component.html',
  styleUrls: ['./orders-rejected.component.css']
})
export class OrdersRejectedComponent implements OnInit {

  allOrders:any;
  orderCreatedDate:any;
  orderUpdatedDate:any;
  loading:boolean = false;
  searchText:any;
  constructor(private title: Title, private orderService: OrdersService) {
    title.setTitle('Rejected Orders');
   }
  ngOnInit(): void {
    this.loading = true;
    this.orderService.getAllOrders().subscribe(
    (data)=>{            
      this.allOrders = data;    
      this.orderCreatedDate = this.allOrders.updated_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      this.orderUpdatedDate = this.allOrders.updated_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      this.loading = false;
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}
