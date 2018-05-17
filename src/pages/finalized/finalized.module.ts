import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FinalizedModule } from '../../components/finalized/finalized.module'
import { IonicPageModule } from 'ionic-angular';
import { FinalizedPage } from './finalized';
import { TabMenuModule } from '../../components/tab-menu/tab-menu.module';

@NgModule({
  declarations: [
    FinalizedPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizedPage),
    FinalizedModule,
    TabMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinalizedPageModule {}
