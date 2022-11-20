import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any ;
  data :any={};
  products: any[]=[];
  loading:boolean=false;
  addButton:boolean=false;
  amount:number = 0;
  cartProducts:any[]=[];
  searchText: any;
  constructor(private route:ActivatedRoute , private service:ProductsService) {
  this.id = this.route.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.getProduct();
    this.getProducts();
  }
  getProduct(){
    this.loading =true;
    this.service.getProductById(this.id).subscribe((res) =>{
      this.data = res;
    this.loading =false;
    })
}
getProducts(){
    this.loading =true;
    this.service.getfiletrproduct(this.id).subscribe((res:any) => {
      this.products = res;
    this.loading =false;
    } , error =>{
      alert(error.message);
    });
  }
  add(){
    // this.item.emit({item:this.cartProducts , quantity: this.amount});
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      console.log(this.cartProducts);
      console.log(this.cartProducts);
      console.log({id: this.products});
}
addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.id == event.id);
      if(exist){
          console.log("Rebeated Product Please Select From Other Products !!!");
      }
      else{
          this.cartProducts.push(event);
          localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
      }
    }
    else{
        this.cartProducts.push(event);
        localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
    }
  }
}
