import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() recibeHijo:string = ''
  @Output() mensajeEnviado = new EventEmitter<string>()
  @Output() incrementarDesdeHijo = new EventEmitter<void>()
  @Output() decrementarDesdeHijo = new EventEmitter<void>()
  
  mensaje:string = ''
  enviarMensaje(){
    this.mensajeEnviado.emit(this.mensaje)
  }
  constructor(private _servicioFamiliar: ServicioFamiliarService){}

  incrementar(){
    this.incrementarDesdeHijo.emit()
  }

  decrementar(){
    this.decrementarDesdeHijo.emit()
  }
}
