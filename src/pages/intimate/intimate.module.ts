import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IntimateModule } from '../../components/intimate/intimate.module'
import { IonicPageModule } from 'ionic-angular';
import { IntimatePage } from './intimate';

@NgModule({
  declarations: [
    IntimatePage,
  ],
  imports: [
    IonicPageModule.forChild(IntimatePage),
    IntimateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntimatePageModule {}
