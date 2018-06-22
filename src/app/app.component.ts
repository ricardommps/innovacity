import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AuthService } from '../services/auth.service';
import {App} from "ionic-angular";
import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';
import { IService } from '../services/IService';

@Component({
  templateUrl: 'app.html',
  providers: [MenuService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = "LoginPage";
  pages: any;
  params:any;
  leftMenuTitle: string;
  constructor(
      public platform: Platform,
      public menu: MenuController,
      private menuService: MenuService,
      public modalCtrl: ModalController,
      public auth: AuthService,
      public events: Events,
      private app: App
    ) {
    this.initializeApp();

    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();

    this.menuService.load(null).subscribe( snapshot => {
        this.params = snapshot;
        this.params.image = "assets/images/avatar/1.jpg";
    });

    if (AppSettings.SHOW_START_WIZARD) {
      this.presentProfileModal();
    }
    events.subscribe('shareObject', (user) => {
      this.params.color = '#ccc'
      this.params.user = user;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      if(this.auth.requireAuth()){
        this.app.getActiveNav().setRoot("DashboardPage")
        this.params.color = '#4FC3F7'
        this.params.user = this.auth.getStorageVariable('profile')
      }else{
        this.params.user = null
        this.app.getActiveNav().setRoot("LoginPage")
      }
      Splashscreen.hide();
     /* (<any>window).handleOpenURL = (url) => {
        Auth0Cordova.onRedirectUri(url);
      };*/
     // localStorage.setItem("mailChimpLocal", "true");
    });
  }

  presentProfileModal() {
    const profileModal = this.modalCtrl.create("IntroPage");
    profileModal.present();
  }

  openPage(page) {
    if(page.title == 'Sair'){
      this.auth.logout();
    }else{
      this.menu.open();
      this.nav.setRoot(page.theme);
    }

  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
  openLocalPdf() {
     window.open('https://drive.google.com/open?id=1pnD0Aci72Qr9JWavJI7T8UH88uPI04rC', '_system');
    //this.document.canViewDocument(filePdf, 'application/pdf', this.options, this.onPossible, this.onMissingApp, this.onImpossible, this.onError)
  }


}
