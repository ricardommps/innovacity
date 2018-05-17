import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMenuComponent } from './tab-menu';

@NgModule({
  declarations: [
    TabMenuComponent,
  ],
  imports: [
    IonicPageModule.forChild(TabMenuComponent)
  ],
  exports: [
    TabMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TabMenuModule { }

