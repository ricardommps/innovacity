import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificationModule } from '../../components/notification/notification.module'
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),
    NotificationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationPageModule {}
