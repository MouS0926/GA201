import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { Store } from '@ngrx/store';
import * as ProductActions from '../products/product.actions';
import * as ProductSelectors from '../products/product.selectors';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$!:Observable<Product[]>

  constructor(private store:Store){}

  ngOnInit() {
    this.products$ = this.store.select(ProductSelectors.selectProductList);
    this.store.dispatch(ProductActions.fetchProduct());
    
   }

   addToCart(product:Product){
    this.store.dispatch(ProductActions.addProducttoCart({ product }));
   
    
    // this.router.navigate(['/shopping-cart']);
   }

}
