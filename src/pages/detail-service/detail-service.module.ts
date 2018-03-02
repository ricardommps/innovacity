import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetailServiceModule } from '../../components/detail-service/detail-service.module'
import { IonicPageModule } from 'ionic-angular';
import { DetailServicePage } from './detail-service';

@NgModule({
  declarations: [
    DetailServicePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailServicePage),
    DetailServiceModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailServicePageModule {}
