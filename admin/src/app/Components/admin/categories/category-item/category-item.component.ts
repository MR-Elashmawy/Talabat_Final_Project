import { Title } from '@angular/platform-browser';
import { CategoriesService } from './../../../../Services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  ngOnInit(): void {
  }
  serviceImage: any;
  file: any;
  imageVAlid:boolean = true;
  msg = "";
  error = "";

  loading: boolean = false;

  editCategory = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    telephone_number: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    phone_number_2: new FormControl(''),
    category_type: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  })
  constructor(private title: Title, private router: ActivatedRoute, private myService: CategoriesService) {
    title.setTitle('Edit Service');
    this.loading = true;
    this.myService.getCurrentCategory(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.serviceImage = result.image;

      this.editCategory = new FormGroup({
        title: new FormControl(result['title']),
        description: new FormControl(result['description']),
        city: new FormControl(result['city']),
        location: new FormControl(result['location']),
        telephone_number: new FormControl(result['telephone_number']),
        phone_number: new FormControl(result['phone_number']),
        phone_number_2: new FormControl(result['phone_number_2']),
        category_type: new FormControl(result['category_type']),
        status: new FormControl(result['status']),
      })
      this.loading = false;
    })
  }

  updateImage(event: any) {
    const file = event.target.files[0];

    if (file.type !== "image/jpg" && file.type !== "image/jpeg" && file.type !== "image/png") {
      this.imageVAlid = false;
      return this.showFailed("Image extension must be (jpg, png)");
    } // user uploaded invalid image extension

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.serviceImage = reader.result;
    }
  }


  collection() {
    if (this.editCategory.invalid) {
      return console.log('moshkla');
      return this.showFailed("All fields required");
      
    } // form data invalid


    if(!this.imageVAlid){
      return this.showFailed("Image extension must be (jpg, png)");
    }


    let data: any = this.editCategory.value;
    data.image = this.serviceImage;
    this.myService.updateCategory(this.router.snapshot.params['id'], data).subscribe((result) => {
      this.showSuccess("Service Has Been Updated Successfully");
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