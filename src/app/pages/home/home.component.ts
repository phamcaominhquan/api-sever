import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../ngrx/state/character.state';
import {Observable, Subscription} from 'rxjs';
import {CharacterModel} from '../../models/character.model';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {AsyncPipe} from '@angular/common';
import {getAllCharacters} from '../../ngrx/actions/character.action';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import * as AuthActions from '../../ngrx/actions/auth.actions';
import {AuthState} from '../../ngrx/state/auth.state';
import * as ProductActions from '../../ngrx/actions/product.action'
import {ProductModel} from '../../models/product.model';
import {ProductState} from '../../ngrx/state/product.state';
import {idToken} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy{
  subscription: Subscription[]=[];
  characterList$!: Observable<CharacterModel>
  isLoading$ !: Observable<boolean>;
  currentUser$ !: Observable<any>;
  idToken$ !: Observable<string>;
  productsList$ !: Observable<ProductModel[]>;
  idToken: string = '';

  constructor(
    private store: Store<{
      character: CharacterState
      auth: AuthState
      product: ProductState
    }>,
    private router: Router,
    private authService: AuthService,
  ) {


    // this.store.dispatch(getAllCharacters())
    // this.isLoading$= this.store.select('character', 'isLoading')
    // this.characterList$= this.store.select('character', 'characterList')
    this.currentUser$ = this.store.select('auth', 'currentUser')
    this.idToken$ = this.store.select('auth', 'idToken')
    this.productsList$ = this.store.select('product', 'productList');
  }


  ngOnInit(){
    this.subscription.push(
      // this.characterList$.subscribe((character: CharacterModel) => {
      //   console.log(character);
      // }),
      // this.currentUser$.subscribe((user)=>{
      //   if (user) {
      //     console.log(user);
      //   }
      // }),
      this.idToken$.subscribe((idToken:string) => {
        if (idToken) {
          this.idToken = idToken;
          this.store.dispatch(ProductActions.getAllProducts({ idToken }));
        }
      }),
      this.productsList$.subscribe((products: ProductModel[]) => {
        if (products.length > 0) {
          console.log(products);
        } else {
          console.log('No products found');
        }
      })

    )
    if(this.idToken !== ''){
    }

  }

  ngOnDestroy(){
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

  navigateToDetail(id:number){
    this.router.navigate(['/detail',id]).then();
  }
  navigateToDetailProduct(id:string){
    this.router.navigate(['/detail',id]).then();
  }
  signUp(){
    this.store.dispatch(AuthActions.login())
  }
  signOut(){
    this.store.dispatch(AuthActions.logout())
  }

}
