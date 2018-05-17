import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupViolationsComponent } from './groupViolations';

@NgModule({
  declarations: [
    GroupViolationsComponent,
  ],
  imports: [
    IonicPageModule.forChild(GroupViolationsComponent)
  ],
  exports: [
    GroupViolationsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GroupViolationsModule { }

