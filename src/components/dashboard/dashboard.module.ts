import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardComponent } from './dashboard';
import { ElasticHeaderModule } from '../elastic-header/elastic-header.module'
import { Keyboard } from '@ionic-native/keyboard';
import { DatePicker } from '@ionic-native/date-picker';
import { AppSettings } from '../../services/app-settings';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    ElasticHeaderModule,
    DirectivesModule,
    AgmCoreModule.forRoot(AppSettings.MAP_KEY),
    AgmJsMarkerClustererModule,
    IonicPageModule.forChild(DashboardComponent),
  ],
  exports: [
    DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Keyboard, DatePicker]
})

export class DashboardModule { }
