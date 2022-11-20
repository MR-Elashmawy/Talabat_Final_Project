import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class confirmComponent implements OnInit {
  success=false;

  constructor() { }

  ngOnInit(): void {
  }
newOrder(){
  this.success =true;
}
}
