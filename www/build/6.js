webpackJsonp([6],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizedPageModule", function() { return FinalizedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_finalized_finalized_module__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalized__ = __webpack_require__(958);
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
            __WEBPACK_IMPORTED_MODULE_1__components_finalized_finalized_module__["a" /* FinalizedModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], FinalizedPageModule);

//# sourceMappingURL=finalized.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcorrenciasService; });
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

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalized__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(424);
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

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedComponent; });
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
        selector: 'finalized',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\finalized\finalized.html"*/'<ion-grid no-padding>\n  <ion-row *ngIf="data != null">\n    <ion-col col-12>\n      <ion-list no-margin *ngIf="data.length == 0">\n        <span>Nenhuma ocorrência encontrada</span>\n      </ion-list>\n      <ion-list no-margin *ngIf="data.length > 0">\n        <ion-item-sliding *ngFor="let item of data" #slidingItem>\n          <ion-item border no-lines\n                    (click)="onEvent(\'onItemClick\', item, $event)">\n            <ion-avatar item-left>\n              <text-avatar [text]="item.tipo" [color]="colorAvatar" item-left style="margin-top:25px;"></text-avatar>\n            </ion-avatar>\n            <!-- Title -->\n            <h2>{{item.tipo}}</h2>\n            <div style="margin-top: 3px;">\n              <h3>{{item.endereco}}</h3>\n              <h4 item-subtitle>{{item.origem}}: {{item.descricao}}</h4>\n            </div>\n            <ion-note item-end class="ionNoteDate"><span>{{item.data_finalizado  | date: \'dd/MM/yyyy\'}}</span></ion-note>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\finalized\finalized.html"*/
    }),
    __metadata("design:paramtypes", [])
], FinalizedComponent);

//# sourceMappingURL=finalized.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ocorrencias__ = __webpack_require__(778);
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




var FinalizedPage = (function () {
    function FinalizedPage(navCtrl, navParams, ocorrencias, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ocorrencias = ocorrencias;
        this.auth = auth;
        this.params = {};
        this.params.events = {
            onItemClick: function (ocorrencia) {
                console.log("---------", ocorrencia);
                navCtrl.push("DetailServicePage", {
                    ocorrencia: {
                        id_ocorrencia: ocorrencia.id_ocorrencia,
                        status_id: ocorrencia.status_id
                    }
                });
            },
        };
    }
    FinalizedPage.prototype.ngOnInit = function () {
        this.userId = this.auth.getuserId();
        this.getOcorrencias();
    };
    FinalizedPage.prototype.getOcorrencias = function () {
        var _this = this;
        this.ocorrencias.getOccurencesClose(this.userId).subscribe(function (result) {
            if (result.success) {
                _this.params.data = result.data;
            }
        });
    };
    FinalizedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.ocorrencias.getOccurencesClose(this.userId).subscribe(function (result) {
            if (result.success) {
                refresher.complete();
                _this.params.data = result.data;
            }
        });
    };
    return FinalizedPage;
}());
FinalizedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finalized',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\finalized\finalized.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n    </button>\n    <ion-title>Atendimentos Finalizados</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <finalized\n    [data]="params.data"\n    [events]="params.events">\n  </finalized>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\finalized\finalized.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_ocorrencias__["a" /* OcorrenciasService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_ocorrencias__["a" /* OcorrenciasService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
], FinalizedPage);

//# sourceMappingURL=finalized.js.map

/***/ })

});
//# sourceMappingURL=6.js.map