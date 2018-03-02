import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViolationModule } from '../../components/violation/violation.module'
import { IonicPageModule } from 'ionic-angular';
import { ViolationPage } from './violation';

@NgModule({
  declarations: [
    ViolationPage,
  ],
  imports: [
    IonicPageModule.forChild(ViolationPage),
    ViolationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViolationPageModule {}
