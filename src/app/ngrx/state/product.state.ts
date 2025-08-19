import {ProductModel} from '../../models/product.model';

export interface ProductState{
  productList: ProductModel[];
  productDetail: ProductModel ;
  isLoading: boolean;
  error: any;
}
