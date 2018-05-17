webpackJsonp([3],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizedPageModule", function() { return FinalizedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_finalized_finalized_module__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalized__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tab_menu_tab_menu_module__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FinalizedPageModule = (function () {
    function FinalizedPageModule() {
    }
    return FinalizedPageModule;
}());
FinalizedPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__finalized__["a" /* FinalizedPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__finalized__["a" /* FinalizedPage */]),
            __WEBPACK_IMPORTED_MODULE_1__components_finalized_finalized_module__["a" /* FinalizedModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_tab_menu_tab_menu_module__["a" /* TabMenuModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], FinalizedPageModule);

//# sourceMappingURL=finalized.module.js.map

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

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalized__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FinalizedModule = (function () {
    function FinalizedModule() {
    }
    return FinalizedModule;
}());
FinalizedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__finalized__["a" /* FinalizedComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finalized__["a" /* FinalizedComponent */]),
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__finalized__["a" /* FinalizedComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], FinalizedModule);

//# sourceMappingURL=finalized.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedComponent; });
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


var FinalizedComponent = (function () {
    function FinalizedComponent() {
        this.colorAvatar = '#4FC3F7';
    }
    FinalizedComponent.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    return FinalizedComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FinalizedComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FinalizedComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], FinalizedComponent.prototype, "content", void 0);
FinalizedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'finalized',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\finalized\finalized.html"*/'<ion-grid no-padding>\n  <ion-row *ngIf="data != null">\n    <ion-col col-12>\n      <ion-list no-margin *ngIf="data.length == 0">\n        <span>Nenhuma ocorrência encontrada</span>\n      </ion-list>\n      <ion-list no-margin *ngIf="data.length > 0">\n        <ion-item-sliding *ngFor="let item of data" #slidingItem>\n          <ion-item no-lines\n                    (click)="onEvent(\'onItemClick\', item, $event)"\n                    [ngClass]="{\'naolido\': !item.lida}">\n            <ion-icon icon-small item-left class="iconItem" style="color: #65c55a !important;">\n              <i class="icon icon-alarm"></i>\n            </ion-icon>\n            <!-- Title -->\n            <h2>{{item.tipo}}</h2>\n            <div style="margin-top: 3px;">\n              <p class="itemDetalhes">{{item.endereco}}</p>\n            </div>\n\n            <ion-icon icon-small item-end>\n              <i class="icon icon-chevron-right"></i>\n            </ion-icon>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\finalized\finalized.html"*/
    }),
    __metadata("design:paramtypes", [])
], FinalizedComponent);

//# sourceMappingURL=finalized.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedPage; });
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





var FinalizedPage = (function () {
    function FinalizedPage(navCtrl, navParams, ocorrencias, auth, notificacao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ocorrencias = ocorrencias;
        this.auth = auth;
        this.notificacao = notificacao;
        this.params = {};
        this.waiting = {};
        this.finalized = {};
        this.pending = {};
        this.params.events = {
            onItemClick: function (ocorrencia) {
                console.log("FINALIZADA---", ocorrencia);
                navCtrl.push("DetailServicePage", {
                    ocorrencia: {
                        _id: ocorrencia.id,
                        id_ocorrencia: ocorrencia.id_ocorrencia,
                        status_id: ocorrencia.status_id
                    }
                });
            },
            onNavigationPage: function (page) {
                navCtrl.setRoot(page);
            }
        };
    }
    FinalizedPage.prototype.ionViewDidEnter = function () {
        this.userId = this.auth.getuserId();
        this.getOcorrencias();
        this.getNotificacoes();
        this.getOccurencesClose();
    };
    FinalizedPage.prototype.getOcorrencias = function () {
        var _this = this;
        var countFinalized = 0;
        this.ocorrencias.getOccurencesClose(this.userId).subscribe(function (result) {
            if (result.success) {
                console.log("-----getOccurencesClose-----", result.data);
                _this.params.data = result.data;
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
    FinalizedPage.prototype.getNotificacoes = function () {
        var _this = this;
        var countWaiting = 0;
        this.notificacao.getNotification(this.userId).subscribe(function (result) {
            if (result.success) {
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
    FinalizedPage.prototype.getOccurencesClose = function () {
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
    FinalizedPage.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    FinalizedPage.prototype.doRefresh = function (refresher) {
        this.userId = this.auth.getuserId();
        this.getOcorrencias();
        this.getNotificacoes();
        this.getOccurencesClose();
        refresher.complete();
    };
    return FinalizedPage;
}());
FinalizedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finalized',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\finalized\finalized.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n    </button>\n    <ion-title>Atendimentos Finalizados</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <tab-menu *ngIf="!isEmptyObject(finalized) && !isEmptyObject(waiting) && !isEmptyObject(pending)"\n            [dataFinalized]="finalized"\n            [dataWaiting]="waiting"\n            [dataPending]="pending"\n            [events]="params.events"></tab-menu>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <finalized\n    [data]="params.data"\n    [events]="params.events">\n  </finalized>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\finalized\finalized.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_ocorrencias__["a" /* OcorrenciasService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_notificacao__["a" /* NotificacaoService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_ocorrencias__["a" /* OcorrenciasService */],
        __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__services_notificacao__["a" /* NotificacaoService */]])
], FinalizedPage);

//# sourceMappingURL=finalized.js.map

/***/ })

});
//# sourceMappingURL=3.js.map