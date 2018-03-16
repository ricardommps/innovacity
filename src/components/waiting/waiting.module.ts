import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingComponent } from './waiting';
import { DirectivesModule } from '../../directives/directives.module';
import { DueNotification } from '../../utils/pipes/dueNotification';
@NgModule({
  declarations: [
    WaitingComponent,
    DueNotification,
  ],
  imports: [
    IonicPageModule.forChild(WaitingComponent),
    DirectivesModule,
  ],
  exports: [
    WaitingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WaitingModule { }
