import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string
  hermanoChico?: string 


  getHermanoGrande():string{
    return this.hermanoGrande || ''
  }
  setHermanoGrande(hermano:string){
    this.hermanoGrande = hermano
  }
  getHermanoChico():string{
    return this.hermanoChico || ''
  }
  setHermanoChico(hermano:string){
    this.hermanoChico = hermano
  }
  saludar(hermano:string){
    console.log('Hola', hermano);
  }

  preguntarPorHijo():string{
    return '¿Cómo está tu hijo?'
  }
  constructor() { }
}
