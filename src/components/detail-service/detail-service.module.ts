import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailServiceComponent } from './detail-service';
import { DirectivesModule } from '../../directives/directives.module';
import { TimelineModule } from '../../components/timeline/timeline.module'
import { TimelineComments } from '../../utils/pipes/timelineComments';
@NgModule({
  declarations: [
    DetailServiceComponent,
    TimelineComments
  ],
  imports: [
    IonicPageModule.forChild(DetailServiceComponent),
    DirectivesModule,
    TimelineModule
  ],
  exports: [
    DetailServiceComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DetailServiceModule { }

