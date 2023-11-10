import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import * as AppActions from './app.actions';

export const initialState:AppState={
    products: [],
    cart: [],
    users:[],
    isAuthenticated: false
}

export const appReducer=createReducer(
    initialState,
    
    on(AppActions.fetchProducts, (state) => {
        
        return state
      }),

      on(AppActions.addProductToCart, (state, { productId }) => {
        const productToAdd = state.products.find(product => product.id === productId);
    
        if (productToAdd) {
          const existingCartItem = state.cart.find(item => item.productId === productId);
    
          if (existingCartItem) {
            // If the product is already in the cart, don't increase quantity, just return the current state
            return state;
          } else {
            // If the product is not in the cart, add it with quantity 1
            const newCartItem = { productId, quantity: 1 };
            return { ...state, cart: [...state.cart, newCartItem] };
          }
        }
    
        return state;
      }),
      
      on(AppActions.fetchProductsSuccess, (state, { products }) => {
        // Handle successful product fetch, update products in state
        return { ...state, products };
      }),

      on(AppActions.fetchProductsFailure, (state, { error }) => {
        // Handle product fetch failure, you can log the error or take appropriate action
        return state;
      }),




    )