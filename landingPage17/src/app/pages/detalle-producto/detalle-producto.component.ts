import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { IProducto } from '../../interfaces/productos.model';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit{

  private _router = inject(ActivatedRoute)
  private _apiservice = inject(ApiserviceService)
  loading:boolean = true

  public producto?: IProducto

  ngOnInit(): void {
   this._router.params.subscribe(params => {
    this._apiservice.getDetalleProducto(params['id']).subscribe((data : IProducto)=>{
      this.producto = data
      this.loading = false
      console.log(data)
    })
   })
  }
}
