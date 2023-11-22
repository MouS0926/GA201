import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCommentsComponent } from './product-comments/product-comments.component';

const routes: Routes = [
  { path: 'product/:id/comments', component: ProductCommentsComponent },
  // { path: '', component: ProductCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
