import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Auth, user} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import * as AuthActions from './ngrx/actions/auth.actions';
import {AuthState} from './ngrx/state/auth.state';
import {HeaderComponent} from './component/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-full-ngrx';
  constructor(private auth: Auth,
              private store: Store<{
                auth: AuthState
              }>
              ) {
    this.auth.onAuthStateChanged(async (auth:any) => {
      if (auth) {
        let idToken = await auth.getIdToken()
        const user = {
          uid: auth.uid,
          displayName: auth.displayName,
          email: auth.email,
          photoURL: auth.photoURL
        }
        this.store.dispatch(AuthActions.storeCurrentUser({user:user, idToken: idToken}))

      }else{
        console.log('No user is signed in');
      }
    })

    }
    }


