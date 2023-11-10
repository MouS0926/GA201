import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer, initialState } from './app.reducer';
import { AppState } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './app.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ app: appReducer }, { initialState } as any),
    EffectsModule.forRoot([AppEffects]),
   
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
