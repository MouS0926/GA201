import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';



export interface AuthState {
  user: {
    username: string;
    // other user properties...
  } | null;
  error: any | null;
  isAuthenticated: boolean;
}


// export interface AuthState {
//   user: any | null;
//   error: any | null;
//   isAuthenticated: boolean;
// }

export const initialAuthState: AuthState = {
  user: null,
  error: null,
  isAuthenticated: false,
};


export const authReducer = createReducer(
  initialAuthState,

  //register
  on(AuthActions.registerSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, user: null, error })),

  //login
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user: { ...user },
    isAuthenticated: true,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    error
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    error: null
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    error
  }))

  
);

