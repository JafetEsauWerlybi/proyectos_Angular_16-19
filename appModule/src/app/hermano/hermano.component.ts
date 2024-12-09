import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {

  hermanoChico: string = ''

  constructor(private _servicioFamiliar: ServicioFamiliarService){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoChico('Pedro')
    this.hermanoChico = this._servicioFamiliar.getHermanoChico()
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande()||'')
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }


}
