import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { AppSettings } from './app-settings';
import {WaitingPage} from "../pages/waiting/waiting";

@Injectable()
export class MenuService implements IService {

    constructor() {}

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "Atendimentos", "theme"  : "DashboardPage",  "icon" : "icon-alarm", colorIcon:"#fe5a5a", "listView" : true, "component": "", "singlePage":true},
        {"title" : "Aguardando Prazo", "theme"  : "WaitingPage",  "icon" : "icon-alarm", colorIcon:"#1097ff", "listView" : true, "component": "", "singlePage":true},
        {"title" : "Finalizados", "theme"  : "FinalizedPage",  "icon" : "icon-alarm", colorIcon:"#65c55a", "listView" : true, "component": "", "singlePage":true},
        {"title" : "Sair", "icon" : "icon-arrow-left"}
      ];
    };

    getDataForTheme = () => {
      return {
        "background": "../assets/images/background/14.jpg",
        "image": "../assets/images/logo/1.png",
        "title": "Ionic 3 theme iOS 11 style",
        "description": "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      SpinnerDialog.show(null, "Loading");
      /*if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
          this.af
            .object('menu')
            .valueChanges()
            .subscribe(snapshot => {
              SpinnerDialog.hide();
              observer.next(snapshot);
              observer.complete();
            }, err => {
              SpinnerDialog.hide();
              observer.error([]);
              observer.complete();
            });
        });
      } else {
        return new Observable(observer => {
          SpinnerDialog.hide();
          observer.next(this.getDataForTheme());
          observer.complete();
        });
      }*/
      return new Observable(observer => {
        SpinnerDialog.hide();
        observer.next(this.getDataForTheme());
        observer.complete();
      });
    }
}


