import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupViolationsPage } from './groupViolations';


@NgModule({
  declarations: [
    GroupViolationsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupViolationsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupViolationsPageModule { }
