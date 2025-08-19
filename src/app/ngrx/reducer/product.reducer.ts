import {ProductState} from '../state/product.state';
import {ProductModel} from '../../models/product.model';
import {createReducer, on} from '@ngrx/store';
import * as ProductActions from '../actions/product.action';

export const initialProductState: ProductState = {
  productList: <ProductModel[]>[],
  productDetail: <ProductModel>{},
  isLoading: false,
  error: null
}


export const productReducer = createReducer(
  initialProductState,

  on(ProductActions.getAllProducts, (state, {type,idToken}) => {
    console.log(type);
    return{
      ...state,
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.getAllProductsSuccess,(state,{products, type}) =>{
    console.log(type);
    return{
      ...state,
      productList: products,
      isLoading: false,
    }
  }),

  on(ProductActions.getAllProductsFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),

  //get product by id
  on(ProductActions.getProductDetail, (state, {productId, type}) => {
    console.log(type);
    return {
      ...state,
      productDetail: <ProductModel>{},
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.getProductDetailSuccess, (state, {product, type}) => {
    console.log(type);
    return {
      ...state,
      productDetail: product,
      isLoading: false
    }
  }),

  on(ProductActions.getProductDetailFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),



  on(ProductActions.createProduct, (state, {product,type}) =>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.createProductSuccess,(state, {products,type}) =>{
    console.log(type);
    return {
      ...state,
      productList: products,
      isLoading: false
    }
  }),

  on(ProductActions.createProductFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  })


)
