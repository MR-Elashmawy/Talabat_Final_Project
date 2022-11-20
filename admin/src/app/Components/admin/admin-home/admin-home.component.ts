import { UsersService } from './../../../Services/users.service';
import { OrdersService } from './../../../Services/orders.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private title: Title, private myOrder : OrdersService, private myUser: UsersService) {
    title.setTitle("Dashboard");
   }

   numOfUsers:any;
   numOfPending:any;
   numOfAccepted:any;
   numOfRejected:any;
   loading:boolean = false;

  ngOnInit(): void {
    this.loading = true;

    this.myUser.countUsers().subscribe((data)=>{
      this.numOfUsers = data;
    })

     this.myOrder.countPending().subscribe((data)=>{            
      this.numOfPending = data;
     
    }
    );
     this.myOrder.countAccepted().subscribe((data)=>{            
      this.numOfAccepted = data;
     
    }
    );
     this.myOrder.countRejected().subscribe((data)=>{            
      this.numOfRejected = data;
     
      this.loading = false;
    }
    )
  }

}
