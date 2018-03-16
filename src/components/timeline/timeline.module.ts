import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelineComponent } from './timeline';
@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    IonicPageModule.forChild(TimelineComponent)
  ],
  exports: [
    TimelineComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TimelineModule { }
