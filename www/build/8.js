webpackJsonp([8],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationPageModule", function() { return ViolationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__violation__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViolationPageModule = (function () {
    function ViolationPageModule() {
    }
    return ViolationPageModule;
}());
ViolationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__violation__["a" /* ViolationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__violation__["a" /* ViolationPage */]),
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ViolationPageModule);

//# sourceMappingURL=violation.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfracoesService; });
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



var InfracoesService = (function () {
    function InfracoesService(http) {
        this.http = http;
    }
    InfracoesService.prototype.getInfrcoes = function () {
        var url = "/infracoes";
        return this.http.get(url).map(function (res) { return res.json(); });
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    return InfracoesService;
}());
InfracoesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
], InfracoesService);

//# sourceMappingURL=infracoes.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_infracoes__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViolationPage = (function () {
    function ViolationPage(navCtrl, navParams, viewCtrl, infracoes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.infracoes = infracoes;
        //this.params.data = navParams.get('violation') ? navParams.get('violation') : {};
    }
    ViolationPage.prototype.ngOnInit = function () {
        console.log("-----ngOnInit");
        this.typeSelected = this.navParams.get('violation');
        console.log("-----typeSelected", this.typeSelected);
        this.typeSelected.infracao.map(function (infracao) {
            if (infracao.checked == undefined) {
                infracao.checked = false;
            }
        });
        console.log("-----typeSelected", this.typeSelected);
        this.copy = JSON.parse(JSON.stringify(this.typeSelected));
        console.log("-----copy", this.copy);
    };
    ViolationPage.prototype.onClose = function () {
        console.log("-----onClose-----", this.copy);
        this.viewCtrl.dismiss(this.copy);
        //this.navCtrl.pop();
    };
    ViolationPage.prototype.onSave = function () {
        console.log(">>typeSelected", this.typeSelected);
        this.viewCtrl.dismiss(this.typeSelected);
    };
    ViolationPage.prototype.teste = function (item, element) {
        var elementItem = (item.split("-"));
        if (element == 'title') {
            return elementItem[0];
        }
        else if (element == 'subTitle') {
            return elementItem[1];
        }
        return "";
    };
    ViolationPage.prototype.getClassDisplay = function (item) {
        var strText = item.split("-")[1].trim();
        if (strText.length > 110) {
            return "displayMore";
        }
        else {
            return "displayNoneMore";
        }
    };
    return ViolationPage;
}());
ViolationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-violation',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\violation\violation.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>{{typeSelected.categoria}}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only class="my-style-for-modal" (click)="onClose()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onSave()"><ion-icon name="checkmark"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons start>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding *ngIf="typeSelected != null">\n    <ion-col col-12 no-padding no-margin>\n      <ion-list no-lines>\n        <ion-item-sliding *ngFor="let item of typeSelected.infracao;let i = index" [attr.data-index]="i" #slidingItem>\n          <ion-item no-lines>\n            <ion-label>\n              <h2>{{teste(item.item,\'title\')}}</h2>\n              <div style="margin-top: 3px;">\n                <p>\n                  <span #textContent1 id="read-more{{i}}" text-wrap>\n                    {{teste(item.item,\'subTitle\')}}\n                  </span>\n                  <span readMore [readMore-length]="110" class="read-more-link" [ngClass]="getClassDisplay(item.item)"\n                        [readMore-element]="textContent1">\n                        <span class="less">menos <i class="fa fa-angle-right" aria-hidden="true"></i></span>\n                        <span class="more">... mais <i class="fa fa-angle-right" aria-hidden="true"></i></span>\n                      </span>\n                </p>\n              </div>\n            </ion-label>\n            <ion-toggle color="green" item-end [(ngModel)]="item.checked"></ion-toggle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      <button ion-button round color="secondary" float-right\n              class="endService"  (click)="onSave()"\n              style="margin-right: 20px;">\n        Continuar\n      </button>\n    </ion-col>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\violation\violation.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_infracoes__["a" /* InfracoesService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_infracoes__["a" /* InfracoesService */]])
], ViolationPage);

//# sourceMappingURL=violation.js.map

/***/ })

});
//# sourceMappingURL=8.js.map