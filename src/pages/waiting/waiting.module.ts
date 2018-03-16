import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingPage } from './waiting';
import { WaitingModule } from '../../components/waiting/waiting.module';

@NgModule({
  declarations: [
    WaitingPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitingPage),
    WaitingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WaitingPageModule {}
