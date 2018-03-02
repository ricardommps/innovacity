import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationComponent } from './notification';

@NgModule({
  declarations: [
    NotificationComponent,
  ],
  imports: [
    IonicPageModule.forChild(NotificationComponent),
  ],
  exports: [
    NotificationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NotificationModule { }

