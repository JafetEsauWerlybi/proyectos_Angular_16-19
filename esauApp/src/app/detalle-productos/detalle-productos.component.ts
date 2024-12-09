import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducto } from '../models/producto.modelo';
import { ApiService } from '../services/api.service';
import { error } from 'console';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrl: './detalle-productos.component.css',
})
export class DetalleProductosComponent implements OnInit {
  producto?: IProducto;
  loading: boolean = true;
  productList: IProducto[] = [];

  constructor(
    private _router: ActivatedRoute,
    private _servicioProducto: ApiService
  ) {}

  ngOnInit(): void {
    this._router.params.subscribe({
      next: (params: Params) => {
        this._servicioProducto.getProductById(Number(params['idProducto'])).subscribe({
          next: (data: IProducto) => {
            // console.log(data);
            
            this.producto = data;
            this.loading = false;
          },
          error: (error: any) => {
            console.log('Error al obtener el producto:', error);
            this.loading = false;
          },
        });
      },
      error: (error: any) => {
        console.log('Error en los parámetros de ruta:', error);
        this.loading = false;
      },
    });
  }
  
}
