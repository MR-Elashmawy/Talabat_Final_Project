import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  id:any ;
  // data :any={};
  products: any[]=[];
  categories:any[] =[];
  loading:boolean=false;
  @Input() data:any = {};
  // @Output() item = new EventEmitter();
  constructor(private route:ActivatedRoute , private service:ProductsService , private titlePage: Title) {
    this.id = this.route.snapshot.paramMap.get("id");
    titlePage.setTitle("Services");
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.service.getAllCategories().subscribe((res:any) => {
      this.products = res;
      // console.log(res);

    } , error =>{
      alert(error.message);
    });
  }
  getCategories(){
    this.loading =true;
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
    this.loading =false;
      // console.log(res);
    } , error =>{
      alert(error.message);
    this.loading =false;
    });
  }
  filtercategory(event:any){
    let value = event.target.value;
    if (value == "All") {
        this.getProducts();
        this.getCategories();
    }
    else{
    this.service.getfiletrcategory(value).subscribe((res:any) =>{
      this.products = res;
    })
  }
  }
}
