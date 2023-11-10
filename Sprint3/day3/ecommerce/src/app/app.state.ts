export interface AppState {
    products: Product[];
    cart: CartItem[];
    users:User[]
    isAuthenticated: boolean;
  }
  
  export interface Product {
    id: number;
    title: string;
    details: string;
    stock: number;
    price: number;
    category: string;
    image:string
  }
  
  export interface CartItem {
    productId: number;
    quantity: number;
  }
  
  export interface User {
    id: number;
    username: string;
    name:string,
    email:string,
    password:string
  }
  