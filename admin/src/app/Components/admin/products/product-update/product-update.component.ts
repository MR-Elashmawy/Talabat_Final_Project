import { CategoriesService } from './../../../../Services/categories.service';
import { Title } from '@angular/platform-browser';
import { ProductsService } from './../../../../Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categories:any;
  category:any = "Restaurants";
  loading:boolean = false;

  constructor(private title: Title, private myActivated: ActivatedRoute, public myService: ProductsService, private categoryService: CategoriesService, private router: Router) {
    title.setTitle("Update Product");
    this.id = myActivated.snapshot.params['id'];

  }


  ngOnInit(): void {
    this.loading = true;
    this.myService.getProductByID(this.id).subscribe(
      (data) => {
        this.product = data;
        this.editProduct = new FormGroup({
          title: new FormControl(this.product['title']),
          details: new FormControl(this.product['details']),
          type: new FormControl(this.product['type']),
          price: new FormControl(this.product['price']),
          category_id: new FormControl(this.product['category_id']),
          status: new FormControl(this.product['status']),
          
        })
        this.productImage = this.product.image;

      }
      );
      // get categories
      this.categoryService.getCategoriesBytype(this.category).subscribe(
        (data) => {
        this.categories = data;
        this.loading = false;
      });

      // this.categoryService.getCategoryType(this.product.category_id).subscribe(
      //   (data) => {
      //   this.category = data;
      //   this.category = this.category.category_type;          
        
      // });
  }

  id: any;
  product :any= {};
  productImage: any;
  file: any;
  msg = "";

  editProduct = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
    category_id: new FormControl(''),
    status: new FormControl(''),
  })


  updateImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.productImage = reader.result;  
    }
  }
  

  
  selectCat(ev: any) {
    this.category = ev.target.value;
    this.categoryService.getCategoriesBytype(this.category).subscribe(
      (data) => {
      this.categories = data;
      console.log(this.category);
      console.log(this.categories);
  });

  }


  updateProduct() {
    let data:any = this.editProduct.value;
    data.image = this.productImage;   
    this.myService.updateProduct(this.id, data).subscribe();
    this.showSuccess("Product Has Been Updated Successfully");
  }

  
  showSuccess(msg="") {
    this.msg = msg;
    setTimeout(() => {
      this.msg = "";
    }, 2000);
  }

}
