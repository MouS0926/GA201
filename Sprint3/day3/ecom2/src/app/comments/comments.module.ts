import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { ProductCommentsComponent } from './product-comments/product-comments.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommentsReducer } from './comments.reducer';


@NgModule({
  declarations: [
    ProductCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    FormsModule,
    StoreModule.forFeature('comments', CommentsReducer)
  ]
})
export class CommentsModule { }
