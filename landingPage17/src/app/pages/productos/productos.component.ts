import { Component, inject, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { IProducto } from '../../interfaces/productos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  productList: IProducto[] = []
  private _apiservice = inject(ApiserviceService)
  private _router = inject(Router)


  ngOnInit(): void {
      this._apiservice.getProductos().subscribe((data : IProducto[])=>{
        this.productList = data
        console.log(data);
        
      })
  }

  navegar(id:number){
    console.log(id);
    this._router.navigate(['/productos', id])
    
  }
}
