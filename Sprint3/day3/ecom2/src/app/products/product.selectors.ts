// product.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productState } from './product.reducer';


export const selectProductState = createFeatureSelector<productState>('products');

export const selectProductList = createSelector(
  selectProductState,
  (state) => state.products
);
// export const selectProducts = createSelector(selectProductState, (state) => state.products);

export const selectCartItems = createSelector(selectProductState, (state) => state.cart);