import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validacoes } from 'src/app/shared/validators/validacoes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup<{
    email: FormControl;
    password: FormControl;
  }> = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validacoes.validaSenha,
    ]),
  });

  constructor() {}

  ngOnInit() {}

  hide = true;

  getCampo(campo: string) {
    return this.form.get(campo)!;
  }

  getErrorCampo(campo: string) {
    return this.getCampo(campo).invalid &&
      (this.getCampo(campo).dirty || this.getCampo(campo).touched)
      ? true
      : false;
  }

  onSubmit() {
    console.log(this.form);
  }
}
