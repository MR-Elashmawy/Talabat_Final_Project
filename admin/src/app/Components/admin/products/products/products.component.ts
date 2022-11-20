import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductsService } from './../../../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private title: Title, public myService: ProductsService) { 
    title.setTitle("All Products");
  }

  products :any;
  msg = "";
  searchText:any;
  loading:boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.myService.getAllProducts().subscribe((data)=>{
      this.products = data;
      this.loading = false;
    });
  }

  deleteProduct(item: number){
    let confirmation = confirm("Are you sure?");
    if(confirmation){
      this.myService.deleteProduct(item).subscribe(()=>{
        this.showSuccess("Product Has Been Deleted Successfully");
        return this.ngOnInit();
      });
    }
  }


  showSuccess(msg="") {
    this.msg = msg;
    setTimeout(() => {
      this.msg = "";
    }, 2000);
  }

}
