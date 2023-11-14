import { createReducer, on } from "@ngrx/store";
import { Product } from "./product.model";
import * as ProductActions from './product.actions'
export interface productState{
    products:Product[],
    cart:{product:Product,quantity:number,productId:number}[]
}

export const initialProductState:productState={
    products:[],
    cart:[]
}

export const productReducer=createReducer(initialProductState,
    
  

    on(ProductActions.fetchProductListSuccess, (state, { products }) => {
        return { ...state, products };
      }),

      on(ProductActions.addProducttoCart, (state, { product }) => {
        // Check if the product is already in the cart
        const existingCartItem = state.cart.find(item => item.product.id === product.id);
      
        if (existingCartItem) {
          // Product is already in the cart, return the current state
          return state;
        }
      
        // Product is not in the cart, add it with quantity 1
        const newCart = [...state.cart, { productId: +product.id, quantity: 1, product }];
      
        return { ...state, cart: newCart };
      })
      





    )