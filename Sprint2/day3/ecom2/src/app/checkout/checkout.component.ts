import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart:CartItem[]=[]



  constructor(private cartService: CartService){
    const cartProduct=localStorage.getItem("cart")
    if(cartProduct)
    {
      this.cart=JSON.parse(cartProduct)
    }
  }
  

  confirmPayment() {
    const isConfirmPayment = confirm('Are you sure you want to place the order?');

    if (isConfirmPayment) {
      
      const productsJson = localStorage.getItem('products');
      if (productsJson) {
        const mainProducts = JSON.parse(productsJson);

        this.cart.forEach((cartProduct) => {
          
          const mainProduct = mainProducts.find((product: CartItem) => product.id === cartProduct.id);

          if (mainProduct && mainProduct.rating.count >= cartProduct.quantity) {
           
            mainProduct.rating.count -= cartProduct.quantity;
          }
        });

       
        localStorage.setItem('products', JSON.stringify(mainProducts));

        
        localStorage.removeItem('cart');

       
        alert('Order placed successfully!');

        
        this.cart = [];
      } else {
        alert('No products found in the main product list.');
      }
    } else {
      alert('Payment canceled');
    }
  }


}
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description:string;
  category:string;
  image:string;
  rating: {
    rate: number;
    count: number;
  };
}