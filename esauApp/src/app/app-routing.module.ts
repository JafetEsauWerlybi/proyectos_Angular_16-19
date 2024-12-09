import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:idProducto', component: DetalleProductosComponent},
  {path: 'contacto', component: ContactosComponent},  
  {path: '**', redirectTo: '/inicio', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
