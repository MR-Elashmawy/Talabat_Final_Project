import { Title } from '@angular/platform-browser';
import { CategoriesService } from './../../../../Services/categories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  alert: boolean = false;
  file:any;
  serviceImage: any;
  msg = "";
  error = "";

  addCat = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    telephone_number: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    phone_number_2: new FormControl(''),
    category_type: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })
  constructor(private pageTitle: Title, private myService: CategoriesService) {
    pageTitle.setTitle('Add Category');
  }

  ngOnInit(): void {
  }

  addImage(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.serviceImage = reader.result;
    }
  }


  addCategory() {

    if(this.addCat.invalid){
     return this.showFailed("All fields required");
    } // form data invalid
    
    if (this.file.type !== "image/jpg" && this.file.type !== "image/jpeg" && this.file.type !== "image/png") {
      return this.showFailed("Image extension must be (jpg, png)");
    } // admin uploaded invalid image extension

    let newService: any = this.addCat.value;
    newService.image = this.serviceImage;
    this.myService.saveCategory(this.addCat.value).subscribe((result) => {
      this.showSuccess("Service Has Been Added Successfully");
      this.addCat.reset({});
      this.serviceImage = "";
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
