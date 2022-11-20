import { CategoriesService } from './../../../../Services/categories.service';
import { Title } from '@angular/platform-browser';
import { ProductsService } from './../../../../Services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  productID:number;
  product:any= {};
  categoryName:any;
  msg = "";
  loading: boolean = false;
  constructor(
    private title: Title, 
    private myActivated: ActivatedRoute, 
    private myService: ProductsService, 
    private categoryService : CategoriesService,
    private router: Router)
  {
    title.setTitle("Product Details");
    this.productID = myActivated.snapshot.params["id"];    
   }

  ngOnInit(): void {//Fetch Data
    this.loading = true;
    // get product details
    this.myService.getProductByID(this.productID).subscribe(
    (data)=>{            
      this.product = data;   
      this.product.created_at =  new Date().toLocaleDateString();
      // get category name
      this.categoryService.getCurrentCategory(this.product.category_id).subscribe(
        (data) => {
        this.categoryName = data
        this.categoryName = this.categoryName.title;
      });
      this.loading = false;
    })

  }

  deleteProduct(item: number){
    let confirmation = confirm("Are you sure?");
    if(confirmation){
      this.myService.deleteProduct(item).subscribe(()=>{
        this.showSuccess("Product Has Been Deleted Successfully");
        setTimeout(() => {
          return this.router.navigate(['/dashboard/products']);
        }, 2000);
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
