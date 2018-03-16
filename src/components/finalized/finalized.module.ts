import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizedComponent } from './finalized';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    FinalizedComponent,
  ],
  imports: [
    IonicPageModule.forChild(FinalizedComponent),
    DirectivesModule,
  ],
  exports: [
    FinalizedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FinalizedModule { }

