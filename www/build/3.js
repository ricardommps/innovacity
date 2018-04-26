webpackJsonp([3],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPageModule", function() { return WaitingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_waiting_waiting_module__ = __webpack_require__(976);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WaitingPageModule = (function () {
    function WaitingPageModule() {
    }
    return WaitingPageModule;
}());
WaitingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_waiting_waiting_module__["a" /* WaitingModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], WaitingPageModule);

//# sourceMappingURL=waiting.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificacaoService = (function () {
    function NotificacaoService(http) {
        this.http = http;
    }
    NotificacaoService.prototype.notification = function (notification) {
        var url = "/notification";
        return this.http.post(url, notification).toPromise();
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    NotificacaoService.prototype.getNotification = function (userId) {
        var url = "/notification/" + userId;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NotificacaoService.prototype.getNotificationOverdue = function (userId) {
        var url = "/notificationOverdue/" + userId;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NotificacaoService.prototype.notificationAlertRead = function (userId) {
        var url = "/notificationAlertRead/" + userId;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    /*public notificationRead(idNotification): Observable<any>  {
      let url:string = `/notificationRead/${idNotification}`
      return this.http.get(url).map((res:Response) => res.json());
      //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    }*/
    NotificacaoService.prototype.notificationDetails = function (idOccurence) {
        var url = "/notificationDetails/" + idOccurence;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    NotificacaoService.prototype.closeNotification = function (notification) {
        var url = "/closeNotification";
        return this.http.post(url, notification).toPromise();
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    return NotificacaoService;
}());
NotificacaoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
], NotificacaoService);

//# sourceMappingURL=notificacao.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notificacao__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WaitingPage = (function () {
    function WaitingPage(navCtrl, navParams, notificacao, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notificacao = notificacao;
        this.auth = auth;
        this.params = {};
        this.items = {};
        this.params.events = {
            onItemClick: function (notification) {
                console.log("---------", notification);
                navCtrl.push("DetailServicePage", {
                    ocorrencia: {
                        id_ocorrencia: notification.id_ocorrencia,
                        status_id: notification.status_id
                    }
                });
            },
        };
    }
    WaitingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userId = this.auth.getuserId();
        this.notificacao.notificationAlertRead(this.userId).subscribe(function () {
        });
        this.notificacao.getNotification(this.userId).subscribe(function (result) {
            if (result.success) {
                _this.items = result.data;
            }
        });
    };
    WaitingPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.notificacao.getNotification(this.auth.getuserId()).subscribe(function (result) {
            if (result.success) {
                refresher.complete();
                _this.items = result.data;
            }
        });
    };
    return WaitingPage;
}());
WaitingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-waiting',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\waiting\waiting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n    </button>\n    <ion-title>Aguardando Prazo</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <waiting *ngIf="items"\n             [data]="items"\n             [events]="params.events">\n  </waiting>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\waiting\waiting.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_notificacao__["a" /* NotificacaoService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_notificacao__["a" /* NotificacaoService */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
], WaitingPage);

//# sourceMappingURL=waiting.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_pipes_dueNotification__ = __webpack_require__(978);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WaitingModule = (function () {
    function WaitingModule() {
    }
    return WaitingModule;
}());
WaitingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__utils_pipes_dueNotification__["a" /* DueNotification */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingComponent */]),
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], WaitingModule);

//# sourceMappingURL=waiting.module.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaitingComponent = (function () {
    function WaitingComponent() {
        this.showDetalhes = false;
        this.colorAvatar = '#4FC3F7';
        this.itensData = {};
    }
    WaitingComponent.prototype.onEvent = function (event, index, e) {
        if (this.events[event]) {
            this.events[event](index);
        }
    };
    WaitingComponent.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    WaitingComponent.prototype.ngOnChanges = function (changes) {
        this.subscribeToIonScroll();
    };
    WaitingComponent.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    WaitingComponent.prototype.ngAfterViewChecked = function () {
        this.subscribeToIonScroll();
    };
    WaitingComponent.prototype.isClassActive = function () {
        return this.active;
    };
    WaitingComponent.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    WaitingComponent.prototype.onRefresh = function () {
    };
    WaitingComponent.prototype.toggleGroup = function () {
        this.showDetalhes = !this.showDetalhes ? true : false;
    };
    WaitingComponent.prototype.isGroupShown = function (group) {
        return group.show;
    };
    WaitingComponent.prototype.dueNotification = function (item) {
        if (!item.days) {
            return 'willDueNotification';
        }
        var nDay = parseInt(item.days);
        if (nDay < 0) {
            return 'dueNotification';
        }
        return null;
    };
    return WaitingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], WaitingComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], WaitingComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], WaitingComponent.prototype, "content", void 0);
WaitingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'waiting',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\waiting\waiting.html"*/'<ion-grid no-padding>\n  <ion-row *ngIf="data != null">\n    <ion-col col-12>\n      <ion-list no-margin *ngIf="data.length == 0">\n        <span>Nenhuma ocorrência encontrada</span>\n      </ion-list>\n      <ion-list no-margin *ngIf="data.length > 0">\n        <ion-item-sliding *ngFor="let item of data" #slidingItem>\n          <ion-item border no-lines\n                    (click)="onEvent(\'onItemClick\', item, $event)"\n                    [ngClass]="{\'naolido\': !item.lida}">\n            <ion-avatar item-left>\n              <text-avatar [text]="item.tipo" [color]="colorAvatar" item-left style="margin-top:25px;"></text-avatar>\n            </ion-avatar>\n            <h2>{{item.tipo}}</h2>\n            <div style="margin-top: 3px;">\n              <h3>{{item.endereco}}</h3>\n              <h4 item-subtitle [ngClass]="dueNotification(item.vencimento)">{{item.vencimento | duenotification}}</h4>\n            </div>\n            <ion-note item-end class="ionNoteDate"><span>{{item.data_cadastro  | date: \'dd/MM/yyyy\'}}</span></ion-note>\n          </ion-item>\n          <ion-item-options no-lines>\n            <button ion-button color="green" text-capitalize padding>\n              Ver detalhes\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\waiting\waiting.html"*/
    }),
    __metadata("design:paramtypes", [])
], WaitingComponent);

//# sourceMappingURL=waiting.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DueNotification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DueNotification = (function () {
    function DueNotification() {
    }
    DueNotification.prototype.transform = function (value, args) {
        if (!value)
            return value;
        if (!value.days) {
            return 'Notificação irá vencer hoje';
        }
        var nValue = parseInt(value.days);
        if (nValue > 0) {
            return 'Notificação vence em ' + value.days + ' dias';
        }
        else {
            return 'Notificação vencida à ' + value.days.toString().split('-')[1] + ' dias';
        }
    };
    return DueNotification;
}());
DueNotification = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'duenotification' })
], DueNotification);

//# sourceMappingURL=dueNotification.js.map

/***/ })

});
//# sourceMappingURL=3.js.map