import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

const selectAppState = createFeatureSelector<AppState>('app');

export const selectProducts = createSelector(
  selectAppState,
  (state) => state.products
);

export const selectCart = createSelector(
  selectAppState,
  (state) => state.cart
);

// ... other selectors