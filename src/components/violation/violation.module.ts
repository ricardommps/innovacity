import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViolationComponent } from './violation';


@NgModule({
  declarations: [
    ViolationComponent
  ],
  imports: [
    IonicPageModule.forChild(ViolationComponent)

  ],
  exports: [
    ViolationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ViolationModule { }
