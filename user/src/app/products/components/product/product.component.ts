import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data:any = {};
@Output() item = new EventEmitter();
addButton:boolean=false;
amount:number = 0;
@Input() product :any = {};
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.product.quantity = this.amount;
    this.item.emit(this.product);
    console.log(this.product);
  }
}
