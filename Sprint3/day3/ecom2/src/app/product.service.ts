import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';
import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3001/products'
  private cartUrl="http://localhost:3001/cart"
  constructor(private http:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }



  getCartList(): Observable<{ id:number,productId: number; quantity: number; product: Product }[]> {
    return this.http.get<{ id:number,productId: number; quantity: number; product: Product }[]>(this.cartUrl);
  }


  addToCart(product: Product): Observable<{ productId: number; quantity: number; product: Product }> {
  
    // Assuming your mock API requires a specific format for adding to the cart
    const cartItem = { productId: +product.id, quantity: 1, product };
    return this.http.post<{ productId: number; quantity: number; product: Product }>(this.cartUrl, cartItem);
  }

  
  checkProductInCart(productId: number): Observable<boolean> {
    // Fetch the current cart data
    return this.http.get<any[]>(`${this.cartUrl}`).pipe(
      map((cartItems) => {
        // Check if the product is in the cart
        return cartItems.some((cartItem) => cartItem.product.id == productId);
      }),
      catchError(() => of(false)) // Handle errors, e.g., if the cart endpoint is not available
    );
  }




//   updateCartItemQuantity(cartItem: {
//     productId: number;
//     quantity: number;
//     product: Product;
//   }): Observable<{ productId: number; quantity: number; product: Product }> {
//     return this.http.put<{ productId: number; quantity: number; product: Product }>(
//       `${this.cartUrl}/${cartItem.productId}`,
//       cartItem
//     );
//   }

// }


updateCartItemQuantity(cartItem: {
  id: number;
  quantity: number;
  product: Product;
}): Observable<{ productId: number; quantity: number; product: Product }> {
  return this.http.put<{ productId: number; quantity: number; product: Product }>(
    `${this.cartUrl}/${cartItem.id}`,
    cartItem
  );
}

}