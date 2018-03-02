import { Component } from '@angular/core';

/**
 * Generated class for the FinalizadosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'finalizados',
  templateUrl: 'finalizados.html'
})
export class FinalizadosComponent {

  text: string;

  constructor() {
    console.log('Hello FinalizadosComponent Component');
    this.text = 'Hello World';
  }

}
