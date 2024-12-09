import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private _http = inject(HttpClient)

  private urlBase = 'https://fakestoreapi.com/products'


  getProductos():Observable<IProducto[]>{
    return this._http.get<IProducto[]>(this.urlBase)
  }

  getDetalleProducto(id:number):Observable<IProducto>{
    return this._http.get<IProducto>(`${this.urlBase}/${id}`)
  }

}
