import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponent } from './user/user.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  
  { path: 'user', component: UserComponent },
 
  {
    path: 'products',

    component: ProductsComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ProductCreateComponent },
     
      { path: 'create', component: ProductCreateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
