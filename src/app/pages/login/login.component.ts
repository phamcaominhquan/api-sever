import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../ngrx/state/character.state';
import {AuthState} from '../../ngrx/state/auth.state';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import * as AuthActions from '../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-login',
  imports: [
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit , OnDestroy{
  subscription: Subscription[]=[];
  currentUser$ !: Observable<any>;
  idToken$ !: Observable<string>;
  constructor(
    private store: Store<{
      character: CharacterState
      auth: AuthState
    }>,
    private router: Router,
    private authService: AuthService,
  ) {
    this.currentUser$ = this.store.select('auth', 'currentUser')
    this.idToken$ = this.store.select('auth', 'idToken')
  }

  ngOnInit() {
    this.subscription.push(
      this.currentUser$.subscribe((user)=>{
        if (user) {
          console.log(user);
        }
      }),
      this.idToken$.subscribe((idToken:string) => {
        console.log(idToken);
      })
    )
  }

  ngOnDestroy() {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

  signUp(){
    this.store.dispatch(AuthActions.login())
  }
  signOut(){
    this.store.dispatch(AuthActions.logout())
  }
  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
