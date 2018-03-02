import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppSettings } from '../services/app-settings'
import { AuthService } from '../services/auth.service';
import { DirectivesModule } from '../directives/directives.module';
import {InterceptedHttp} from "./http.interceptor";
import { GoogleMaps, Geocoder  } from '@ionic-native/google-maps';


export function httpInterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, inj: Injector) {
  return new InterceptedHttp(xhrBackend, requestOptions, inj);
}


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthService,
    Geolocation,
    GoogleMaps,
    Geocoder,
    NativeGeocoder,
      {
        provide: [ErrorHandler,Http],
        useClass: IonicErrorHandler
      },
      {
        provide: Http,
        useFactory: httpInterceptorFactory,
        deps: [XHRBackend, RequestOptions, Injector]
      }

    ]
})
export class AppModule {
}
