import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterState} from '../../ngrx/state/character.state';
import {Store} from '@ngrx/store';
import {Observable, of, Subscription} from 'rxjs';
import {CharacterItemModel} from '../../models/characterItem.model';
import * as CharacterActions from '../../ngrx/actions/character.action'
import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {ProductModel} from '../../models/product.model';
import {ProductState} from '../../ngrx/state/product.state';
import * as ProductActions from '../../ngrx/actions/product.action'
import * as AuthActions from '../../ngrx/actions/auth.actions';
import {AuthState} from '../../ngrx/state/auth.state';

@Component({
  selector: 'app-detail',
  imports: [
    AsyncPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit, OnDestroy {
  subscription: Subscription[]=[];
  characterById$!: Observable<CharacterItemModel>;
  productById$!: Observable<ProductModel>;
  idToken: string = '';
  idToken$ !: Observable<string>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{
      character: CharacterState
      product: ProductState
      auth: AuthState
    }>,
  )
  {

    this.idToken$ = this.store.select('auth', 'idToken')


    this.productById$ = this.store.select('product', 'productDetail');


    // this.characterById$ = this.store.select('character', 'characterById');
    // this.store.dispatch(CharacterActions.getCharacterById({
    //   id: id
    // })
    // )
  }
  ngOnInit() {
    let {id} = this.activatedRoute.snapshot.params;
    console.log(id);
    this.subscription.push(
      // this.characterById$.subscribe(
      //   (character) => {
      //     console.log(character);
      //   }
      // )
      this.idToken$.subscribe((idToken:string) => {
        if (idToken) {
          this.idToken = idToken;
          this.store.dispatch(ProductActions.getProductDetail({
            productId:id,
            idToken: idToken,
          }))
        }
      }),

      this.productById$.subscribe((product) => {
        console.log('Product detail:', product);
      })
    );


  }
  ngOnDestroy() {
    this.subscription.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  protected readonly of = of;
}
