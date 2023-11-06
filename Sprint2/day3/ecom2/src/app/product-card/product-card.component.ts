import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products:Product[]=[]
  loading:boolean=true
  searchQuery: string = '';
  filteredProducts:Product[]=[]
  selectedCategory:string=""



 


constructor(private produtcService:ProductService,private router:Router,private cartservice:CartService){}

ngOnInit() {
  // Check if product data is already in localStorage
  const localStorageProducts = localStorage.getItem('products');
  if (localStorageProducts) {
    this.products = JSON.parse(localStorageProducts);
    this.filteredProducts = this.products;
    this.loading = false;
  } else {
    this.produtcService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
        this.filteredProducts = data;
        this.loading = false;

        // Store product data in localStorage
        localStorage.setItem('products', JSON.stringify(data));
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}

  SearchByTitle(){
    this.filteredProducts=this.products.filter((el)=>
    {
        const titleSearch=el.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        const categoryFiltered=this.selectedCategory==""|| el.category==this.selectedCategory
        return titleSearch && categoryFiltered
    }
    
    )
  }

  onProductClick(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  addtoCart(item:Product){
    this.cartservice.addProductCart(item)
  }

  isItemIncart(item:Product){
    return this.cartservice.isItemIncart(item)
  }
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