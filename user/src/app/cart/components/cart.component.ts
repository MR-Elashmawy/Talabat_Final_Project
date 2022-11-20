import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  success = false;
  cartProducts: any[] = [];
  orderDetails = [{}];

  total = 0;
  constructor(private orderService: CartService) { }
  ngOnInit(): void {
    this.getCartProducts();
  }


  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();

  }

  plusamount(index: number) {
    this.cartProducts[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  minsamount(index: number) {
    this.cartProducts[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].price * this.cartProducts[x].quantity;
    }
    return this.total
  }
  detectChange() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  clearCart() {
    this.cartProducts = [];
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  newOrder() {
    this.success = true;
    let newOrder = {
      user_id: Number(localStorage.getItem('user')),
      total_price: this.getCartTotal()
    };
    this.orderService.makeOrder(newOrder).subscribe(
      (data) => {
        for (let i = 0; i < this.cartProducts.length; i++) {
          this.orderDetails.push(
            {
              order_id: data,
              product_id: this.cartProducts[i].id,
              quantity: this.cartProducts[i].quantity
            }
          )
        }
        for (let i = 1; i <= this.orderDetails.length; i++) {
          if (this.orderDetails[i] == undefined) {
            break;
          }
          this.orderService.makeOrderDetails(this.orderDetails[i]).subscribe();
        }
      }

    );







    // let newOrder = [];
    // for (let i = 0; i < this.cartProducts.length; i++) {
    //   newOrder.push(
    //     {
    //       details: this.cartProducts[i].id,
    //       total_price: this.cartProducts[i].price * this.cartProducts[i].quantity,
    //       user_id: Number(sessionStorage.getItem('user'))
    //     }
    //   )
    // }
    // let total= 0;
    // for (let i = 0; i < newOrder.length; i++) {
    //   total = total + newOrder[i].total_price;
    //   this.orderService.makeOrder(newOrder[i]).subscribe();
    // }
    // return console.log(total);


  }
  // make new order
}
