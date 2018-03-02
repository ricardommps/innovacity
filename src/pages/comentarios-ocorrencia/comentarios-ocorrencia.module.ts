import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComentariosOcorrenciaModule } from '../../components/comentarios-ocorrencia/comentarios-ocorrencia.module'
import { IonicPageModule } from 'ionic-angular';
import { ComentariosOcorrenciaPage } from './comentarios-ocorrencia';

@NgModule({
  declarations: [
    ComentariosOcorrenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentariosOcorrenciaPage),
    ComentariosOcorrenciaModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComentariosOcorrenciaPageModule {}
