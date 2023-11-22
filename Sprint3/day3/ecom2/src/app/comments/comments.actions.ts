// comments.actions.ts

import { createAction, props } from '@ngrx/store';

export const addComment = createAction('[Comments] Add Comment', props<{ comment: string }>());
export const viewComments = createAction('[Comments] View Comments');
