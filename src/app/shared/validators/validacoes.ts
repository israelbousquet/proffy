import { AbstractControl, FormControl } from '@angular/forms';

export class Validacoes {
  static validaSenha(control: FormControl) {
    const senha = control.value;
    const regexp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if (senha && !regexp.test(senha)) {
      return { senhaInvalida: true };
    }
    return null;
  }
}
