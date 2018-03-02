import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizedComponent } from './finalized';

@NgModule({
  declarations: [
    FinalizedComponent,
  ],
  imports: [
    IonicPageModule.forChild(FinalizedComponent),
  ],
  exports: [
    FinalizedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FinalizedModule { }

