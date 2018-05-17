import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViolationPage } from './violation';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ViolationPage,
  ],
  imports: [
    IonicPageModule.forChild(ViolationPage),
    DirectivesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViolationPageModule {}
