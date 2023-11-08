import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponent } from './user/user.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    UserComponent,
   
    NotfoundComponent,
    ProductlistComponent,
    NavbarComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
