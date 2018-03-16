import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntimateComponent } from './intimate';

import { AddressNumber } from '../../utils/pipes/addressNumber';

@NgModule({
  declarations: [
    IntimateComponent,AddressNumber
  ],
  imports: [
    IonicPageModule.forChild(IntimateComponent),
  ],
  exports: [
    IntimateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntimateModule { }
