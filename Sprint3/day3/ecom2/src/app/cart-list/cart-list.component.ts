import { Component,OnInit  } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartProducts: { id:number, productId: number; quantity: number; product: Product }[] = []
  totalAmount:number=0
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    // Fetch cart products when the component is initialized
    this.fetchCartProducts();
    
    
  }

  fetchCartProducts(): void {
    this.productService.getCartList().subscribe(
      (cartItems) => {
        // Extract the product property from each cart item
        this.cartProducts = cartItems
        console.log(this.cartProducts);
        this.calculateTotalAmount()
      },
      (error) => {
        console.error('Error fetching cart products:', error);
        // Handle error as needed
      }
    );
  }



  incrementQuantity(product: { id:number,productId: number; quantity: number; product: Product }): void {
    product.quantity++;
    this.updateCart(product);
    this.calculateTotalAmount()
  }

  decrementQuantity(product: { id:number,productId: number; quantity: number; product: Product }): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.updateCart(product);
      this.calculateTotalAmount()
    }
  }



  updateCart(product:{ id:number,productId: number; quantity: number; product: Product }): void {
    this.productService.updateCartItemQuantity(product).subscribe(
      (response) => {
        console.log('Cart updated successfully:', response);
      },
      (error) => {
        console.error('Error updating cart:', error);
        // Handle error as needed
      }
    );
  }




  calculateTotalAmount(): void {
    // Initialize total amount to zero
    this.totalAmount = 0;

    // Iterate through cart products and calculate the total amount
    this.cartProducts.forEach((product) => {
      this.totalAmount += product.product.price * product.quantity;
    });
  }

}
