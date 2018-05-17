import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingPage } from './waiting';
import { WaitingModule } from '../../components/waiting/waiting.module';
import { TabMenuModule } from '../../components/tab-menu/tab-menu.module';

@NgModule({
  declarations: [
    WaitingPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitingPage),
    WaitingModule,
    TabMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WaitingPageModule {}
