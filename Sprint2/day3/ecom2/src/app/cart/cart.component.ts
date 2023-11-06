import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartproduct:CartItem[]=[]
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    const cartinLs=localStorage.getItem("cart")
    if(cartinLs)
    {
      this.cartproduct=JSON.parse(cartinLs)

      
    }
  }

  removeFromCart(itemId: number){
    this.cartService.removeFromCart(itemId)
    this.cartproduct = this.cartproduct.filter((item) => item.id != itemId);
    localStorage.setItem('cart', JSON.stringify(this.cartproduct));
  }

increaseQuantity(item:CartItem){
  if(item.quantity<item.rating.count)
  {
    item.quantity+=1
    this.cartService.updateQuantity(item,item.quantity)
  }
  else{
    alert("Quantity limit reached")
  }
}



decreaseQuantity(item:CartItem){
  if(item.quantity<item.rating.count)
  {
    item.quantity-=1
    this.cartService.updateQuantity(item,item.quantity)
  }
  else{
    alert("Quantity limit reached")
  }
}


calculateTotalAmount(): number {
  let total = 0;
  this.cartproduct.forEach((el) => {
    total += el.quantity * el.price;
  });
  return total;
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