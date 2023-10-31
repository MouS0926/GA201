import { Component,OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    { id:1,title: 'Product 1', description: 'Description 1'
    ,price:2345,
    details:"lorem ipsum",
    image:"https://assets.ajio.com/medias/sys_master/root/20230624/VLik/6496404ba9b42d15c9d7ec40/-473Wx593H-465144489-white-MODEL.jpg",
  category:"home-decor",
  quantity:3
  },
   
    { id:2,title: 'Product 2',
     description: 'Description 2',
    price:1200 ,
    details:"lorem ipsum",
    image:"https://assets.ajio.com/medias/sys_master/root/20230621/pvAR/6493286ad55b7d0c639ea9bf/-473Wx593H-466295481-grey-MODEL.jpg",
    category:"home-decor",
    quantity:3
  },
   
    {id:3, title: 'Product 3', description: 'Description 3',
    price:789,
    details:"lorem ipsum",
    image:"https://assets.ajio.com/medias/sys_master/root/20230624/v4d8/649645d5a9b42d15c9d8aa2a/-473Wx593H-465144477-black-MODEL.jpg",
    category:"home-decor",
    quantity:3
   },
   {id:4, title: 'Kurta', description: 'Description 3',
   price:880,
   details:"lorem ipsum",
   image:"https://assets.ajio.com/medias/sys_master/root/20221219/m0oe/63a00760aeb269659cf189d1/-473Wx593H-441149576-navy-MODEL.jpg",
   category:"clothing",
   quantity:3
  },
];



cart : Product[]=[]

  isShowdetails:boolean=false

  selectedCategory:string=""
  categories: string[] = [];
  filteredProducts: Product[] = [];
  selectedSortOption:string=""
  constructor(private cartService: CartserviceService) {}

  ngOnInit(): void {
   
    this.cart=this.cartService.getCart()

    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        this.products = JSON.parse(storedProducts); 
    } else {
        
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    this.products.forEach((product) => {
      if (!this.categories.includes(product.category)) {
        this.categories.push(product.category);
      }
    });

   
    this.filteredProducts = this.products;
   }

  showDetails(){
    this.isShowdetails=!this.isShowdetails
    console.log(this.isShowdetails);
    
  }

  addtoCart(product:Product){
    this.cartService.addToCart(product)
   
   
  }

 

  isInCart(product: Product): boolean {
    return this.cartService.isInCart(product); 
  }

  //filter by category
 

  filterProduct() {
    if (this.selectedCategory === '') {
      this.filteredProducts = this.products; //for all products
    } else {
      this.filteredProducts = this.products.filter((el) => el.category === this.selectedCategory);
    }
  }

  sortProduct(){
    if (this.selectedSortOption==""){
      this.filteredProducts=this.products
    }
  else  if(this.selectedSortOption=="asc")
    {
      this.filteredProducts.sort((a,b)=>a.price-b.price)
    }
    else if(this.selectedSortOption=="desc"){
      this.filteredProducts.sort((a,b)=>b.price-a.price)
    }
    
  }
}
