import { IService } from './IService';
import { Toast } from 'ionic-native';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { AppSettings } from './app-settings'

@Injectable()
export class LoginService implements IService {

    constructor(public af: AngularFireDatabase) { }

    getId = (): string => 'login';

    getTitle = (): string => 'Login pages';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Login + logo 1", "theme"  : "layout1"},
          {"title" : "Login + logo 2", "theme"  : "layout2"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getDataForLayout1 = (): any => {
      return {
        "username"        : "Enter your username",
        "password"        : "Enter your password",
        "labelUsername"   : "USERNAME",
        "labelPassword"   : "PASSWORD",
        "register"        : "Register now!",
        "forgotPassword"  : "Forgot password?",
        "login"           : "Login",
        "subtitle"        : "Welcome",
        "title"           : "Login to your account",
        "skip"            : "Skip",
        "logo"            : "assets/images/logo/2.png"
      };
    };

    getDataForLayout2 = (): any => {
      return {
        "forgotPassword" : "Forgot password?",
        "subtitle"       : "Welcome",
        "labelUsername"   : "USERNAME",
        "labelPassword"   : "PASSWORD",
        "title"          : "Login to your account",
        "username"       : "Enter your username",
        "password"       : "Enter your password",
        "register"       : "Register",
        "login"          : "Login",
        "skip"           : "Skip",
        "logo"           : "assets/images/logo/2.png"
      };
    };


    getEventsForTheme = (menuItem: any): any => {
        return {
            onLogin: function(params) {
              if (!(window.location.hostname === "localhost")) {
                Toast.show('onLogin:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
              }
            },
            onForgot: function() {
                if (!(window.location.hostname === "localhost")) {
                  Toast.show('onForgot', '1000', 'bottom').subscribe(toast => { });
                }
            },
            onRegister: function(params) {
                if (!(window.location.hostname === "localhost")){
                    if (params != null) {
                      Toast.show('onRegister:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                    } else {
                      Toast.show('onRegister', '1000', 'bottom').subscribe(toast => { });
                    }
                }
            },
            onSkip: function(params) {
                if (!(window.location.hostname === "localhost")) {
                  Toast.show('onSkip:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                }
            },

        };
    };


    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        SpinnerDialog.show(null, "Loading");
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('login/' + item.theme)
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
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
