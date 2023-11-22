import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { Store } from '@ngrx/store';
import * as ProductActions from '../products/product.actions';
import * as ProductSelectors from '../products/product.selectors';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$!:Observable<Product[]>

  constructor(private store:Store,private productService:ProductService,private router:Router){
   
  }

  ngOnInit() {
    this.products$ = this.store.select(ProductSelectors.selectProductList);
    this.store.dispatch(ProductActions.fetchProduct());
    
   }

  
 

  addToCart(product: Product): void {
    // Check if the product is already in the cart on the server side
    this.productService.checkProductInCart(+product.id).subscribe(
      (isInCart) => {
        if (isInCart) {
          alert('Product is already in the cart!');
        } else {
          // Product is not in the cart, add it to the cart and dispatch the NgRx action
          this.productService.addToCart(product).subscribe(
            (cartItem) => {
              // Dispatch the NgRx action to update the store
              this.store.dispatch(ProductActions.addProductToCartSuccess({ cartItem }));
              alert("Product added to cart")
            },
            (error) => {
              console.error('Error adding product to cart', error);
              // Handle error if needed
            }
          );
        }
      },
      (error) => {
        console.error('Error checking if product is in cart', error);
        // Handle error if needed
      }
    );
  }


  navigateToProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

}
