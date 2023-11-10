import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppActions from './app.actions';
import { ProductService } from './product.service';

@Injectable()
export class AppEffects {
  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => AppActions.fetchProductsSuccess({ products })),
          catchError((error) =>
            of(AppActions.fetchProductsFailure({ error: 'Error fetching products' }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductService) {}
}
