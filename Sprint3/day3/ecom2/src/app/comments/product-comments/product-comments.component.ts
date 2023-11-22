import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CommentsActions from '../comments.actions';
import { getComments } from '../comments.state';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';



@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit{

  commentText: string = '';
  comments$: Observable<string[]> = this.store.select(getComments);

  constructor(private store: Store, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        const productId = +params.get('id')!;
        // Fetch comments for the product with the ID from the route
        this.store.dispatch(CommentsActions.viewComments());
        // Return an observable to satisfy the switchMap
        return this.store.select(getComments); // Adjust based on your state structure
      })
    )
    .subscribe();
  }


  addComment(): void {
    if (this.commentText.trim() !== '') {
      this.store.dispatch(CommentsActions.addComment({ comment: this.commentText }));
      this.commentText = ''; // Clear the input field after adding a comment
    }
  }


  viewComments(): void {
    this.store.dispatch(CommentsActions.viewComments());
  }

}
