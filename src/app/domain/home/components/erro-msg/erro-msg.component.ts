import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.scss'],
})
export class ErroMsgComponent {
  @Input() control: FormControl;
  @Input() label: string;

  get errorMessage() {
    for (const erro in this.control.errors) {
      return this.generateMessageError(this.label, erro);
    }
  }

  generateMessageError(label: string, erroKey: string) {
    const message: { [key: string]: any } = {
      required: `${label} é um campo obrigatório`,
      email: 'Email inválido',
      senhaInvalida:
        'A senha precisa ter no mínimo 1 letra maiúscula e 1 símbolo',
    };

    return message[erroKey];
  }
}
