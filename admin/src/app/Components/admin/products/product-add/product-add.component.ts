import { CategoriesService } from './../../../../Services/categories.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductsService } from './../../../../Services/products.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productImage: any;
  file: any;
  products: any;
  msg = "";
  error = "";
  form: FormGroup | any;
  category = "Restaurants";
  categories:any;
  constructor(private title: Title, private myService: ProductsService, private categoryService: CategoriesService, private build: FormBuilder, private router: Router) {
    title.setTitle("Add Product");
  }
  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      details: ['', Validators.required],
      type: ['', Validators.required],
      category_id: ['', Validators.required],
      status: ['1', Validators.required],
    })

    this.categoryService.getCategoriesBytype(this.category).subscribe(
      (data) => {
      this.categories = data;
    });

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

  addImage(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.productImage = reader.result;
    }
  }

  addProduct() {
    
    if(this.form.invalid || !this.productImage){
      return this.showFailed("All fields required");
     } // form data invalid
     
     if (this.file.type !== "image/jpg" && this.file.type !== "image/jpeg" && this.file.type !== "image/png") {
       return this.showFailed("Image extension must be (jpg, png)");
     } // admin uploaded invalid image extension


    const newProduct = this.form.value;
    newProduct.image = this.productImage;
    this.myService.addNewProduct(newProduct).subscribe(res => {
      this.showSuccess("Product Has Been Added Successfully");
      this.productImage = "";
      this.file = "";
      this.form.reset();
    })

  }

  showSuccess(msg = "") {
    this.msg = msg;
    setTimeout(() => {
      this.msg = "";
    }, 2000);
  }


  showFailed(err = "") {
    this.error = err;
    setTimeout(() => {
      this.error = "";
    }, 2000);
  }


}
