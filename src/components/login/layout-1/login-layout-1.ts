import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { AuthService } from '../../../services/auth.service';

@IonicPage()
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html',
    providers: [AuthService]
})
export class LoginLayout1 {
    @Input() data: any;
    @Input() events: any;
    authForm: FormGroup;
    public usuario: string;
    public senha: string;

    constructor( public auth: AuthService, public formBuilder: FormBuilder ) {
      this.authForm = formBuilder.group({
        usuario: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(30)])],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
    }

  onSubmit(value: any): void {
    if(this.authForm.valid) {
      let event = 'onLogin'
      this.events[event]({
        'usuario': this.usuario,
        'senha': this.senha
      });

    }
  }

  onEvent = (event: string): void => {
      console.log(this.usuario,this.senha)
        if (this.events[event]) {
            this.events[event]({
                'usuario': this.usuario,
                'senha': this.senha
            });
        }
    }
}
