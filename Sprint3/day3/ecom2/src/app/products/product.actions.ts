import { createAction, props } from "@ngrx/store";
import { Product } from "./product.model";

export const addProducttoCart=createAction(
    '[Product] Add product to Cart',
    props<{product:Product}>()
)


export const addProductToCartSuccess = createAction(
  '[Product] Add Product to Cart Success',
  props<{ cartItem: { productId: number; quantity: number; product: Product } }>()
);

export const addProductToCartFailure = createAction(
  '[Product] Add Product to Cart Failure',
  props<{ error: any }>()
);

export const removeProducttoCart=createAction(
    '[Product] Remove product from Cart',
    props<{productId:number}>()
)

export const fetchProduct=createAction('[Product] Fetch Product List')

export const fetchProductListSuccess = createAction(
    '[Product] Fetch Product List Success',
    props<{ products: Product[] }>()
  );
  export const fetchProductListFailure = createAction(
    '[Product] Fetch Product List Failure',
    props<{ error: any }>()
  )