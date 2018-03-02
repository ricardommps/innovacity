import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailServiceComponent } from './detail-service';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    DetailServiceComponent,
  ],
  imports: [
    IonicPageModule.forChild(DetailServiceComponent),
    DirectivesModule
  ],
  exports: [
    DetailServiceComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DetailServiceModule { }

