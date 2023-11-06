import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product:any
  constructor(private route:ActivatedRoute,private productService:ProductService){}

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
     
      let productId= +params['id']
      // console.log(productId);

      this.productService.getproductById(productId).subscribe(
          (data:any)=>{
            console.log(data);
            this.product=data
          },
          (err)=>{
            console.log(err);
            
          }

      )
    })

  }
}
