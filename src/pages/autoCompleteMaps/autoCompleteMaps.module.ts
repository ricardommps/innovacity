import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutoCompleteMapsPage } from './autoCompleteMaps';

@NgModule({
  declarations: [
    AutoCompleteMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(AutoCompleteMapsPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutoCompleteMapsPageModule {}
