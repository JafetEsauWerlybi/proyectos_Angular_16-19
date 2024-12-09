import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:id', component: DetalleProductoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
];
