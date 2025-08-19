import {AuthState} from '../state/auth.state';
import {createReducer, on} from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const initialState: AuthState = {
  currentUser: null,
  idToken: '',
  isLoading: false,
  error: null
}

export const authReducer = createReducer(
  initialState,


  on(AuthActions.login, (state,{type}) =>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
      error: null
    }
  }),

  on(AuthActions.storeCurrentUser, (state,{idToken,user,type}) =>{
    console.log(type);
    return {
      ...state,
      currentUser: user,
      idToken: idToken,
      isLoading: false,
      error: null
    }
  }),

  on(AuthActions.loginFailure, (state,{type, error}) =>{
    console.log(type);
    console.log(error)
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),

  on(AuthActions.loginSuccess, (state,{type}) =>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: null
    }
  }),
  on(AuthActions.logout, (state,{type}) =>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
      error: null
    }
  }),

  on(AuthActions.logoutSuccess, (state,{type}) =>{
    console.log(type);
    return {
      ...state,
      currentUser: null,
      idToken: '',
      isLoading: false,
      error: null
    }
  }),

  on(AuthActions.logoutFailure, (state,{type, error}) =>{
    console.log(type);
    console.log(error)
    return {
      ...state,
      isLoading: false,
      error: error
    }
  })
)
