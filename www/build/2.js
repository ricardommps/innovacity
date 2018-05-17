webpackJsonp([2],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPageModule", function() { return WaitingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_waiting_waiting_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tab_menu_tab_menu_module__ = __webpack_require__(735);
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
            __WEBPACK_IMPORTED_MODULE_3__components_waiting_waiting_module__["a" /* WaitingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_tab_menu_tab_menu_module__["a" /* TabMenuModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], WaitingPageModule);

//# sourceMappingURL=waiting.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
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
    NotificacaoService.prototype.notificationRead = function (idOccurence) {
        var url = "/notificationRead/" + idOccurence;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
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

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcorrenciasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OcorrenciasService = (function () {
    function OcorrenciasService(http) {
        this.http = http;
    }
    OcorrenciasService.prototype.getOcorrencias = function (userId) {
        var url = "/ocorrencias/" + userId;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    OcorrenciasService.prototype.getOccurencesClose = function (userId) {
        var url = "/ocorrencesClose/" + userId;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    OcorrenciasService.prototype.closeOccurence = function (occurenceData) {
        var url = "/closeOcorrenciaV2";
        return this.http.post(url, occurenceData).toPromise();
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    OcorrenciasService.prototype.occurenceRead = function (idOccurence) {
        var url = "/occurenceRead/" + idOccurence;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    OcorrenciasService.prototype.occurenceClose = function (idOccurence) {
        var url = "/ocorrenceClose/" + idOccurence;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    OcorrenciasService.prototype.occurenceClosedRead = function (idOccurence) {
        console.log("----occurenceClosedRead----");
        var url = "/occurenceClosedRead/" + idOccurence;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    OcorrenciasService.prototype.occurence = function (idOccurence) {
        var url = "/ocorrence/" + idOccurence;
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    return OcorrenciasService;
}());
OcorrenciasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
], OcorrenciasService);

//# sourceMappingURL=ocorrencias.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_menu__ = __webpack_require__(736);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabMenuModule = (function () {
    function TabMenuModule() {
    }
    return TabMenuModule;
}());
TabMenuModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab_menu__["a" /* TabMenuComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_menu__["a" /* TabMenuComponent */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tab_menu__["a" /* TabMenuComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], TabMenuModule);

//# sourceMappingURL=tab-menu.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabMenuComponent = (function () {
    function TabMenuComponent() {
    }
    TabMenuComponent.prototype.onEvent = function (event, item, e) {
        console.log(event);
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    return TabMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TabMenuComponent.prototype, "dataFinalized", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TabMenuComponent.prototype, "dataWaiting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TabMenuComponent.prototype, "dataPending", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TabMenuComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], TabMenuComponent.prototype, "content", void 0);
TabMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tab-menu',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\tab-menu\tab-menu.html"*/'<div class="story">\n    <div class="story_scroll" (click)="onEvent(\'onNavigationPage\', \'DashboardPage\', $event)">\n      <div class="story_img_bg">\n        <div class="story_img pending">\n          <p style="display: inline;position: relative;top: 2px;">{{dataPending.total}}</p>\n          <span>{{dataPending.totalNews}}</span>\n        </div>\n      </div>\n      <p no-margin no-padding text-center class="story_text">PENDENTES</p>\n    </div>\n    <div class="story_scroll" (click)="onEvent(\'onNavigationPage\', \'WaitingPage\', $event)">\n      <div class="story_img_bg">\n        <div class="story_img waiting">\n          <p style="display: inline;position: relative;top: 2px;">{{dataWaiting.total}}</p>\n          <span>{{dataWaiting.totalNews}}</span>\n        </div>\n      </div>\n      <p no-margin no-padding text-center class="story_text waiting">AGUARDANDO PRAZO</p>\n    </div>\n    <div class="story_scroll" (click)="onEvent(\'onNavigationPage\', \'FinalizedPage\', $event)">\n      <div class="story_img_bg">\n        <div class="story_img finalized">\n          <p style="display: inline;position: relative;top: 2px;">{{dataFinalized.total}}</p>\n          <span>{{dataFinalized.totalNews}}</span>\n        </div>\n      </div>\n      <p no-margin no-padding text-center class="story_text">FINALIZADOS</p>\n    </div>\n  </div>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\tab-menu\tab-menu.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabMenuComponent);

//# sourceMappingURL=tab-menu.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ocorrencias__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notificacao__ = __webpack_require__(732);
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
    function WaitingPage(navCtrl, navParams, ocorrencias, auth, notificacao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ocorrencias = ocorrencias;
        this.auth = auth;
        this.notificacao = notificacao;
        this.params = {};
        this.items = {};
        this.waiting = {};
        this.finalized = {};
        this.pending = {};
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
            onNavigationPage: function (page) {
                navCtrl.setRoot(page);
            }
        };
    }
    WaitingPage.prototype.ionViewDidEnter = function () {
        this.userId = this.auth.getuserId();
        this.getOcorrencias();
        this.getNotificacoes();
        this.getOccurencesClose();
    };
    WaitingPage.prototype.getOcorrencias = function () {
        var _this = this;
        var countFinalized = 0;
        this.ocorrencias.getOccurencesClose(this.userId).subscribe(function (result) {
            if (result.success) {
                var resultFinalized = result.data;
                resultFinalized.map(function (t) {
                    if (!t.lida) {
                        countFinalized++;
                    }
                });
                _this.finalized.totalNews = countFinalized;
                _this.finalized.total = resultFinalized.length;
            }
            else {
                _this.finalized.totalNews = 0;
                _this.finalized.total = 0;
            }
        });
    };
    WaitingPage.prototype.getNotificacoes = function () {
        var _this = this;
        var countWaiting = 0;
        this.notificacao.getNotification(this.userId).subscribe(function (result) {
            if (result.success) {
                _this.items = result.data;
                var resultWaiting = result.data;
                resultWaiting.map(function (t) {
                    if (!t.lida) {
                        countWaiting++;
                    }
                });
                _this.waiting.totalNews = countWaiting;
                _this.waiting.total = resultWaiting.length;
            }
            else {
                _this.waiting.totalNews = 0;
                _this.waiting.total = 0;
            }
        });
    };
    WaitingPage.prototype.getOccurencesClose = function () {
        var _this = this;
        var countPending = 0;
        this.ocorrencias.getOcorrencias(this.userId).subscribe(function (result) {
            if (result.success) {
                var resultPending = result.data;
                resultPending.map(function (t) {
                    if (!t.lida) {
                        countPending++;
                    }
                });
                _this.pending.totalNews = countPending;
                _this.pending.total = resultPending.length;
            }
            else {
                _this.pending.totalNews = 0;
                _this.pending.total = 0;
            }
        });
    };
    WaitingPage.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    WaitingPage.prototype.doRefresh = function (refresher) {
        this.userId = this.auth.getuserId();
        this.getOcorrencias();
        this.getNotificacoes();
        this.getOccurencesClose();
        refresher.complete();
    };
    return WaitingPage;
}());
WaitingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-waiting',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\waiting\waiting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n    </button>\n    <ion-title>Aguardando Prazo</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <tab-menu *ngIf="!isEmptyObject(finalized) && !isEmptyObject(waiting) && !isEmptyObject(pending)"\n            [dataFinalized]="finalized"\n            [dataWaiting]="waiting"\n            [dataPending]="pending"\n            [events]="params.events"></tab-menu>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <waiting *ngIf="items"\n             [data]="items"\n             [events]="params.events">\n  </waiting>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\waiting\waiting.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_ocorrencias__["a" /* OcorrenciasService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_notificacao__["a" /* NotificacaoService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_ocorrencias__["a" /* OcorrenciasService */],
        __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__services_notificacao__["a" /* NotificacaoService */]])
], WaitingPage);

//# sourceMappingURL=waiting.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_pipes_dueNotification__ = __webpack_require__(808);
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

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
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
        selector: 'waiting',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\waiting\waiting.html"*/'<ion-grid no-padding>\n  <ion-row *ngIf="data != null">\n    <ion-col col-12>\n      <ion-list no-margin *ngIf="data.length == 0">\n        <span>Nenhuma ocorrência encontrada</span>\n      </ion-list>\n      <ion-list no-margin *ngIf="data.length > 0">\n        <ion-item-sliding *ngFor="let item of data" #slidingItem>\n          <ion-item no-lines\n                    (click)="onEvent(\'onItemClick\', item, $event)"\n                    [ngClass]="{\'naolido\': !item.lida}">\n            <ion-icon icon-small item-left class="iconItem" style="color: #1097ff !important;">\n              <i class="icon icon-alarm"></i>\n            </ion-icon>\n            <!-- Title -->\n            <h2>{{item.tipo}}</h2>\n            <div style="margin-top: 3px;">\n              <p class="itemDetalhes">{{item.endereco}}</p>\n            </div>\n\n            <ion-icon icon-small item-end>\n              <i class="icon icon-chevron-right"></i>\n            </ion-icon>\n          </ion-item>\n          <ion-item-options no-lines>\n            <button ion-button color="green" text-capitalize padding>\n              Ver detalhes\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\waiting\waiting.html"*/
    }),
    __metadata("design:paramtypes", [])
], WaitingComponent);

//# sourceMappingURL=waiting.js.map

/***/ }),

/***/ 808:
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
//# sourceMappingURL=2.js.map