import { Component } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart:Product[]=[]
  constructor(private cartService: CartserviceService){
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
          
          const mainProduct = mainProducts.find((product: Product) => product.id === cartProduct.id);

          if (mainProduct && mainProduct.stock >= cartProduct.quantity) {
           
            mainProduct.stock -= cartProduct.quantity;
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
