import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, Product } from '../app.state';
import { Store } from '@ngrx/store';
import { addProductToCart, fetchProducts } from '../app.actions';
import { selectCart, selectProducts } from '../app.selectors';
import { ProductService } from '../product.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  products$!: Observable<Product[]>
  cart$!:Observable<CartItem[]>
  cartStatus: boolean[] = [];
  constructor(private store: Store,private productService: ProductService) {}

  ngOnInit() {
    this.store.dispatch(fetchProducts());
    this.products$ = this.store.select(selectProducts);
    this.cart$ = this.store.select(selectCart);

   this.store.select(selectCart).subscribe(cart => {
      // Update cart status for each product when the cart changes
      this.products$.pipe(
        map(products =>
          products.map(product =>
            cart.some(item => item.productId === product.id)
          )
        )
      ).subscribe(status => this.cartStatus = status);
    });


    
  }
 
  isProductInCart(index: number): boolean {
    return this.cartStatus[index];
  }


  // isProductInCart(productId:number):boolean{
  //   let isInacart=false

  //   this.cart$.subscribe(cart => {
  //     isInacart = cart.some(item => item.productId == productId);
  //   });

  //   return isInacart
  // }




  // addToCart(product: Product) {
  //   if(this.isProductInCart(product.id))
  //   {
  //     alert("product is already in cart")
  //   }
  //   else{
  //   // Dispatch the action to add the product to the cart
  //   this.store.dispatch(addProductToCart({ productId: product.id }));

  //   this.productService.addToCart(product).subscribe(
  //     (cart) => console.log('Product added to cart:', cart),
  //     (error) => console.error('Error adding product to cart:', error)
  //   );

  //   }
        
  // }




  addToCart(product: Product, index: number) {
    if (this.isProductInCart(index)) {
      alert("Product is already in the cart");
    } else {
      this.store.dispatch(addProductToCart({ productId: product.id }));

      this.productService.addToCart(product).subscribe(
        (cart) => console.log('Product added to cart:', cart),
        (error) => console.error('Error adding product to cart:', error)
      );
    }
  }
  
}
