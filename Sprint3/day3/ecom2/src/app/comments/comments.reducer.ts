import { createReducer, on } from '@ngrx/store';
import * as CommentsActions from './comments.actions';
import { initialCommentsState } from './comments.state';


export const CommentsReducer = createReducer(
    initialCommentsState,
    on(CommentsActions.addComment, (state, { comment }) => {
      return { ...state, comments: [...state.comments, comment] };
    }),
    on(CommentsActions.viewComments, (state) => state)
  );