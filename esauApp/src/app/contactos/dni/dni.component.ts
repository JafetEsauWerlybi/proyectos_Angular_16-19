import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnChanges {

  @Input() tipoDNI:string = 'DNI'

  formularioDocumento : FormGroup
  
  constructor(private form: FormBuilder){
    this.formularioDocumento = this.form.group({
     
      dni: ['', ],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes?.['tipoDNI'].currentValue);
      
  }

  hasError(controlName:string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched
  }
}
