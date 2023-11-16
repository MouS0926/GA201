import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products/product.effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './auth/auth.effects';
import { ProductListComponent } from './product-list/product-list.component';
import { productReducer } from './products/product.reducer';
import { ProductService } from './product.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authReducer } from './auth/auth.reducer';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartListComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({products: productReducer ,auth: authReducer}),
    EffectsModule.forRoot([ProductEffects,AuthEffects]),
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
