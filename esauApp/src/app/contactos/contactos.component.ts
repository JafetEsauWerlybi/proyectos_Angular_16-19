import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements OnInit {
  // public user: any={
  //   nombre: '',
  //   email: ''
  // }
  formularioContacto : FormGroup
  tipoDNI:string = 'DNI'
  mostrarDNI: boolean = false
  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDNI: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
      this.formularioContacto.get('tipoDNI')?.valueChanges.subscribe(value=>{
        this.mostrarDNI = value != ''
        this.tipoDNI= value
      })
  }
  
  enviar(){
    // console.log(this.user);
    console.log(this.formularioContacto); 
    
    
  }

  hasError(controlName:string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
}
