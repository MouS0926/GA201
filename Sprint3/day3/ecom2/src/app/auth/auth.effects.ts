// auth.effects.ts

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map,mergeMap,switchMap  } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffects {

  register$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.register),
    mergeMap((action) =>
      this.authService.register(action.username, action.email, action.password).pipe(
        map((user) => AuthActions.registerSuccess({ user })),
        catchError((error) => of(AuthActions.registerFailure({ error })))
      )
    )
  )
);


login$ = createEffect(() =>
this.actions$.pipe(
  ofType(AuthActions.login),
  switchMap(({ email, password }) =>
    this.authService.getUsers().pipe(
      switchMap(users => {
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          // Valid credentials, dispatch login success
         
          return of(AuthActions.loginSuccess({ user }));
         
        } else {
          // Invalid credentials, dispatch login failure
          return of(AuthActions.loginFailure({ error: 'Invalid credentials' }));
        }
      }),
      catchError(error => of(AuthActions.loginFailure({ error })))
    )
  )
)
);






  constructor(private actions$: Actions, private authService: AuthService) {}
}
