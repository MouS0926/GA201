import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path:"",component:ProductCardComponent},
{path:"product/:id",component:ProductDetailsComponent},
{path:"login", component:LoginPageComponent},
{path:"cart", component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
