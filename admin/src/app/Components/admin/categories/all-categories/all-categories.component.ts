import { Title } from '@angular/platform-browser';
import { CategoriesService } from './../../../../Services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  constructor(private title:Title, private myService:CategoriesService) {
    title.setTitle('All Services');
   }

  collection:any=[];
  msg = "";
  searchText: any;
  loading:boolean = false;
  ngOnInit(): void {
    this.loading = true;
    this.myService.getCategories().subscribe((result)=>{
      this.collection = result;
      this.loading = false;
    });
  }
  deleteResto(item: number){
    let confirmation = confirm('are you sure?');
    if(confirmation){
      this.myService.deleteCategory(item).subscribe((result)=>{
        this.showSuccess("Service Has Been Deleted Successfully");
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
