import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products:any[]=[]
  loading:boolean=true
  searchQuery: string = '';
  filteredProducts:any[]=[]
  selectedCategory:string=""

constructor(private produtcService:ProductService,private router:Router){}

  ngOnInit() {
    this.produtcService.getProducts().subscribe(
      (data:any)=>{
      this.products=data
      this.filteredProducts=data
      this.loading=false
    },
    (error) => {
      console.error(error);
      this.loading = false; 
    }
    )
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

  
}
