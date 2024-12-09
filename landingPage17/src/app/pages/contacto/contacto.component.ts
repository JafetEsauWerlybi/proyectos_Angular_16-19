import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  contactForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.contactForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  hasError(field:string, typeError:string){
      return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched
  }

}
