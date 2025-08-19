import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(idToken: string){
    return this.http.get<ProductModel[]>('http://localhost:3000/product',{
      headers:{
        Authorization:  idToken
      }
    });
  }

  createProduct(product: ProductModel) {
    return this.http.post<ProductModel[]>('http://localhost:3000/product', product);
  }

  getProductById(id: string, idToken: string) {
    return this.http.get<ProductModel>(`http://localhost:3000/product/get-by-id/${id}`,{
      headers:{
        Authorization: idToken
      }
    });

  }
}
