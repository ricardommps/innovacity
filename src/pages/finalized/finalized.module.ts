import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FinalizedModule } from '../../components/finalized/finalized.module'
import { IonicPageModule } from 'ionic-angular';
import { FinalizedPage } from './finalized';

@NgModule({
  declarations: [
    FinalizedPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizedPage),
    FinalizedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinalizedPageModule {}
