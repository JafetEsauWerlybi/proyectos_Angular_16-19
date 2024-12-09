import { Component, OnInit } from '@angular/core';
import { ProductList } from './productos.mock';
import { IProducto } from '../models/producto.modelo';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  productList: IProducto[] = [] 

  constructor(private _serviceProduct: ApiService){

  }

  ngOnInit(): void {
      this._serviceProduct.getProducts().subscribe((data: IProducto[])=>{
        this.productList = data
      })
  }
}
