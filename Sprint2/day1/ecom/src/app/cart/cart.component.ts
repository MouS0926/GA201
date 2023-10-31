import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:Product[]=[]
 
  constructor(private cartService: CartserviceService){
    const cartProducts = localStorage.getItem('cart');
    if(cartProducts)
    {
      this.cart=JSON.parse(cartProducts)
    }
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
    this.cart = this.cart.filter((item) => item !== product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    // this.cart = this.cartService.getCart()
  }

  // increamentQty(product:Product){
  //   product.quantity+=1
  //   this.cartService.updateQuantity(product,product.quantity)
  // }

  increamentQty(product: Product) {
    if (product.quantity < product.stock) {
      product.quantity += 1;
      this.cartService.updateQuantity(product, product.quantity);
    } else {
      alert('Quantity limit reached!');
    }
  }


  decreamentQty(product:Product){
    if(product.quantity>1)
    {
      product.quantity-=1
      this.cartService.updateQuantity(product,product.quantity)
    }
   }
  
}
