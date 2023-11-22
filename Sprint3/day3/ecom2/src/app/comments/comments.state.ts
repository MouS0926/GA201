import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface CommentsState {
    comments: string[]; 
  }

  export const initialCommentsState: CommentsState = {
    comments: [],
  };
  
  export const getCommentsState = createFeatureSelector<CommentsState>('comments');
export const getComments = createSelector(getCommentsState, (state) => state.comments);