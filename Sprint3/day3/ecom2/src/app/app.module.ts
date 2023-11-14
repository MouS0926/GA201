import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products/product.effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './auth/auth.effects';
import { ProductListComponent } from './product-list/product-list.component';
import { productReducer } from './products/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({products: productReducer}, {}),
    EffectsModule.forRoot([ProductEffects,AuthEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
