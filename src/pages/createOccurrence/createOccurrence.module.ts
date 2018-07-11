import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateOccurrencePage } from './createOccurrence';

@NgModule({
  declarations: [
    CreateOccurrencePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateOccurrencePage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateOccurrencePageModule {}
