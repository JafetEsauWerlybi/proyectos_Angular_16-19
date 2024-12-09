import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{
  contador: number= 0
  mensajePadre = 'mensaje desde el padre god'
  hermanoGrande: string = ''
  mensajeRecibido:string = ''
  fecha?: Date = new Date()
  dolar?: number = 192901.2
  pi: number = Math.PI
  
  constructor(private _servicioFamiliar: ServicioFamiliarService){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan')
    this.hermanoGrande = this._servicioFamiliar.getHermanoGrande()
  }


  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoChico()||'')
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

  // recibirMensaje($event: string){
  //   this.mensajeRecibido = $event
  // }
  // decrementar(){
  //   this.contador--;
  // }
  // incrementar(){
  //   this.contador++
  // }
}
