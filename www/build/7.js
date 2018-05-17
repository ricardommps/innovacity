webpackJsonp([7],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosOcorrenciaPageModule", function() { return ComentariosOcorrenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_comentarios_ocorrencia_comentarios_ocorrencia_module__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comentarios_ocorrencia__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComentariosOcorrenciaPageModule = (function () {
    function ComentariosOcorrenciaPageModule() {
    }
    return ComentariosOcorrenciaPageModule;
}());
ComentariosOcorrenciaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__comentarios_ocorrencia__["a" /* ComentariosOcorrenciaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__comentarios_ocorrencia__["a" /* ComentariosOcorrenciaPage */]),
            __WEBPACK_IMPORTED_MODULE_1__components_comentarios_ocorrencia_comentarios_ocorrencia_module__["a" /* ComentariosOcorrenciaModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ComentariosOcorrenciaPageModule);

//# sourceMappingURL=comentarios-ocorrencia.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosOcorrenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comentarios_ocorrencia__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComentariosOcorrenciaModule = (function () {
    function ComentariosOcorrenciaModule() {
    }
    return ComentariosOcorrenciaModule;
}());
ComentariosOcorrenciaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comentarios_ocorrencia__["a" /* ComentariosOcorrenciaComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comentarios_ocorrencia__["a" /* ComentariosOcorrenciaComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comentarios_ocorrencia__["a" /* ComentariosOcorrenciaComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ComentariosOcorrenciaModule);

//# sourceMappingURL=comentarios-ocorrencia.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosOcorrenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComentariosOcorrenciaComponent = (function () {
    function ComentariosOcorrenciaComponent() {
        this.comentarioData = {
            ocorrenciaData: {},
            comentario: ""
        };
    }
    ComentariosOcorrenciaComponent.prototype.ngOnInit = function () {
        this.comentarioData.ocorrenciaData = this.data;
    };
    ComentariosOcorrenciaComponent.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    return ComentariosOcorrenciaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ComentariosOcorrenciaComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ComentariosOcorrenciaComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ComentariosOcorrenciaComponent.prototype, "occurenceSelected", void 0);
ComentariosOcorrenciaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'comentarios-ocorrencia',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\comentarios-ocorrencia\comentarios-ocorrencia.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Fechar Ocorrência</ion-title>\n       <ion-buttons end>\n      <button ion-button icon-only (click)="onEvent(\'onClose\', $event)"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid no-padding>\n    <ion-row *ngIf="data != null">\n      <ion-col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4>\n        <ion-card text-left>\n          <ion-card-content>\n            <ion-card-title>\n              <!--Card Title-->\n              <h2 card-title>{{data.tipo}}</h2>\n              <!--Card Subtitle-->\n              <h1 card-subtitle>{{data.numero_atendimento}}</h1>\n              <!--Card Body Text-->\n              <ion-textarea placeholder="Comentarios"\n                            [(ngModel)]="comentarioData.comentario" name="note" autocomplete="on" autocorrect="on"></ion-textarea>\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <button ion-button default-button full color="secondary" style="margin-top: 20px; text-transform: none;" (click)="onEvent(\'onCloseOccurence\', comentarioData, $event)">Salvar</button>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\comentarios-ocorrencia\comentarios-ocorrencia.html"*/
    }),
    __metadata("design:paramtypes", [])
], ComentariosOcorrenciaComponent);

//# sourceMappingURL=comentarios-ocorrencia.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosOcorrenciaPage; });
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


/**
 * Generated class for the ComentariosOcorrenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComentariosOcorrenciaPage = (function () {
    function ComentariosOcorrenciaPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.params = {};
        this.params.data = navParams.get('occurence') ? navParams.get('occurence') : {};
        this.params.events = {
            'onClose': function (service) {
                viewCtrl.dismiss();
            },
            'onCloseOccurence': function (item) {
                viewCtrl.dismiss(item);
            }
        };
    }
    return ComentariosOcorrenciaPage;
}());
ComentariosOcorrenciaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comentarios-ocorrencia',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\comentarios-ocorrencia\comentarios-ocorrencia.html"*/'\n<comentarios-ocorrencia\n  [data]="params.data"\n  [events]="params.events"></comentarios-ocorrencia>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\comentarios-ocorrencia\comentarios-ocorrencia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], ComentariosOcorrenciaPage);

//# sourceMappingURL=comentarios-ocorrencia.js.map

/***/ })

});
//# sourceMappingURL=7.js.map