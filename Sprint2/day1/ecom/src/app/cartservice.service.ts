import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cart: Product[] = [];
  constructor() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  addToCart(product: Product) {
    let isExist = this.cart.some((el) => el.id === product.id);
    if (isExist) {
      alert('Product is already added to the cart!');
    } else {
      this.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  isInCart(product: Product): boolean {
    return this.cart.some((el) => el.id === product.id);
  }

  getCart(): Product[] {
    return this.cart;
  }
}
