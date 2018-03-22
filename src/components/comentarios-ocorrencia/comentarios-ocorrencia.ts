import {Component, Input} from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'comentarios-ocorrencia',
  templateUrl: 'comentarios-ocorrencia.html'
})
export class ComentariosOcorrenciaComponent {

  @Input() data: any;
  @Input() events: any;
  @Input() occurenceSelected: any;
  comentarioData: any = {
    ocorrenciaData:{},
    comentario:""
  }
  content: Content;
  constructor() {
  }

  ngOnInit(){
    this.comentarioData.ocorrenciaData = this.data;
  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
