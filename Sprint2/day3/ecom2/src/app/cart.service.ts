import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class CartService {
private cart:CartItem[]=[]

  constructor() {
    const storeCart=localStorage.getItem("cart")
    if(storeCart)
    {
      this.cart=JSON.parse(storeCart)
    }
   }

   addProductCart(item:Product){

        const  isExistincart=this.cart.find((el)=>el.id==item.id)
        if(isExistincart)
        {
          alert("product already in cart")
        }
        else{
          this.cart.push({...item,quantity:1})
        }

        localStorage.setItem("cart",JSON.stringify(this.cart))
    }

    removeFromCart(itemId: number) {
      const index = this.cart.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
  
      // Update the cart in localStorage
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }

    getCartItem(){
      return this.cart
    }

 
    isItemIncart(item:Product):boolean{
      const  isExistincart=this.cart.find((el)=>el.id==item.id)
      return !!isExistincart
    }


    updateQuantity(product: Product, newQuantity: number) {
      this.cart = this.cart.map((item) => {
        if (item.id === product.id) {
          item.quantity = newQuantity;
        }
        return item;
      });
  
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }

}

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description:string;
  category:string;
  image:string;
  rating: {
    rate: number;
    count: number;
  };
}
interface Product {
   id: number;
    title: string;
    price: number;
    description:string;
    category:string;
    image:string
    rating: {
      rate: number;
      count: number;
    };
}