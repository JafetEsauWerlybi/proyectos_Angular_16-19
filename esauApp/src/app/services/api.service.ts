import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Category, IProducto } from '../models/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl='https://fakestoreapi.com/products'
  constructor(private _httpClient: HttpClient) { }


  public getProducts(): Observable<IProducto[]>{
    return this._httpClient.get<IProducto[]>(this.baseUrl)
  }

  public getProductById(id:number): Observable<IProducto>{
    // console.log(id);
    
    return this._httpClient.get<IProducto>(`${this.baseUrl}/${id}`)
  }

  public getCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories}`)
  }

  public newProducto(producto:IProducto): Observable<IProducto>{
    return this._httpClient.post<IProducto>(this.baseUrl, producto)
  }
  public updateProducto(id:number, producto: IProducto):Observable<IProducto>{
    return this._httpClient.put<IProducto>(`${this.baseUrl}/${id}`, producto)
  }

  public deleteProducto(id:number):Observable<IProducto>{
    return this._httpClient.delete<IProducto>(`${this.baseUrl}/${id}`)
  }
}
