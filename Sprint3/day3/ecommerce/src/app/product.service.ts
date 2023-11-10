import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CartItem, Product } from './app.state';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl = 'http://localhost:3001'
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
   
    // Replace this with the actual HTTP request in a real application
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  addToCart(product: Product): Observable<CartItem[]> {
    // You may need to adjust the request payload based on your API requirements
    const payload = {
      productId: product.id,
      quantity: 1,
      title: product.title,
      details: product.details,
      stock: product.stock,
      price: product.price,
      category: product.category,
      image: product.image
    };

    return this.http.post<CartItem[]>(`${this.apiUrl}/cart`, payload);
  }

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiUrl}/cart`);
  }
}
