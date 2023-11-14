import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  addToCart(product: Product): Observable<any> {
    return this.http.post<any>(this.cartUrl, { product });
  }
}