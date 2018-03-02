import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentariosOcorrenciaComponent } from './comentarios-ocorrencia';

@NgModule({
  declarations: [
    ComentariosOcorrenciaComponent,
  ],
  imports: [
    IonicPageModule.forChild(ComentariosOcorrenciaComponent),
  ],
  exports: [
    ComentariosOcorrenciaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ComentariosOcorrenciaModule { }
