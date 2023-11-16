import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as ProductActions from './product.actions';
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { select,Store } from '@ngrx/store';
import { productState } from './product.reducer';

@Injectable()


export class ProductEffects {

  constructor(
    private actions$:Actions,
    private productService:ProductService,
    private store:Store<{ products: productState }>) { }

  fetchProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.fetchProduct),
      switchMap(() =>
        this.productService.getProductList().pipe(
          map((products) =>
            ProductActions.fetchProductListSuccess({ products })
          ),
          catchError((error) =>
            of(ProductActions.fetchProductListFailure({ error }))
          )
        )
      )
    )
  );

  // addProductToCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProductActions.addProducttoCart),
  //     withLatestFrom(this.store.pipe(select('products'))),
  //     switchMap(([action, state]) => {
  //       // Check if the state is undefined
  //       console.log('addProductToCart action dispatched', action);
  //     console.log('Current state', state);
  //       if (!state) {
  //         return of(ProductActions.addProductToCartFailure({ error: 'State is undefined' }));
  //       }

  //       // Check if the product is already in the cart
  //       const existingCartItem = state.cart.find((item: any) => item.product.id === action.product.id);

  //       if (existingCartItem) {
  //         // Product is already in the cart, you can show an alert or handle it as needed
  //         return of(ProductActions.addProductToCartFailure({ error: 'Product is already in the cart' }));
  //       }

  //       // Use the ProductService's addToCart function to perform the addition to the cart
  //       return this.productService.addToCart(action.product).pipe(
  //         map(() => ProductActions.addProductToCartSuccess({ cartItem: { productId: +action.product.id, quantity: 1, product: action.product } })),
  //         catchError(error => of(ProductActions.addProductToCartFailure({ error })))
  //       );
  //     })
  //   )
  // );


  addProductToCart$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.addProducttoCart),
    mergeMap((action) =>
      this.productService.addToCart(action.product).pipe(
        map((cartItem) => ProductActions.addProductToCartSuccess({ cartItem })),
        catchError((error) => of(ProductActions.addProductToCartFailure({ error })))
      )
    )
  )
);




}
