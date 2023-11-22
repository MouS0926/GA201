import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productd-details',
  templateUrl: './productd-details.component.html',
  styleUrls: ['./productd-details.component.css']
})
export class ProductdDetailsComponent implements OnInit {
  product!:Product

  constructor(private route :ActivatedRoute,private productService:ProductService){}

  ngOnInit(): void {
    const productIdString = this.route.snapshot.paramMap.get('id');

  // Convert the productIdString to a number 
  const productId = productIdString ? +productIdString : null;

  
  if (productId !== null) {
    
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
   
  }



}
