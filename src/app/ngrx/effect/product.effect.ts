import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';

import {catchError, map, of, switchMap} from 'rxjs';
import {ProductsService} from '../../services/products/products.service';
import * as ProductActions from '../actions/product.action';


export const getAllProductsEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductsService)) =>{
    return actions$.pipe(
      ofType(ProductActions.getAllProducts),
      switchMap((action) =>productService.getAllProducts(action.idToken).pipe(
          map((products) => {
            console.log(products);
            return ProductActions.getAllProductsSuccess({products:products});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.getAllProductsFailure({error})))
        )
      )
    )
  },
  {functional: true}
)


export const getProductDetailEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductsService)) =>{
    return actions$.pipe(
      ofType(ProductActions.getProductDetail),
      switchMap((action) => productService.getProductById(action.productId, action.idToken).pipe(
          map((product) => {
            console.log(product);
            return ProductActions.getProductDetailSuccess({product: product});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.getProductDetailFailure({error})))
        )
      )
    )
  },
  {functional: true}
);


export const createProductEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductsService)) =>{
    return actions$.pipe(
      ofType(ProductActions.createProduct),
      switchMap((action) => productService.createProduct(action.product).pipe(
          map((products) => {
            console.log(products);
            return ProductActions.createProductSuccess({products: products});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.createProductFailure({error})))
        )
      )
    )
  },
  {functional: true}
);
