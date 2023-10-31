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
      this.cart.push({...product,quantity:1});
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  isInCart(product: Product): boolean {
    return this.cart.some((el) => el.id === product.id);
  }

  getCart(): Product[] {
    return this.cart;
  }
  removeFromCart(product:Product){
    let UpdatedProduct=this.cart.filter((el)=>el.id!=product.id)
    localStorage.setItem("cart",JSON.stringify(UpdatedProduct))
    
  }
  

  updateQuantity(product: Product, newQuantity: number) {
    this.cart = this.cart.map((item) => {
      if (item.id === product.id) {
        item.quantity = newQuantity;
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
