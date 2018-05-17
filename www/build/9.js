webpackJsonp([9],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupViolationsPageModule", function() { return GroupViolationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupViolations__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupViolationsPageModule = (function () {
    function GroupViolationsPageModule() {
    }
    return GroupViolationsPageModule;
}());
GroupViolationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groupViolations__["a" /* GroupViolationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupViolations__["a" /* GroupViolationsPage */]),
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], GroupViolationsPageModule);

//# sourceMappingURL=groupViolations.module.js.map

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

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupViolationsPage; });
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



var GroupViolationsPage = (function () {
    function GroupViolationsPage(navCtrl, navParams, alertCtrl, modalCtrl, viewCtrl, infracoes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.infracoes = infracoes;
        this.violations = navParams.get('violations') ? navParams.get('violations') : [];
        console.log("------", this.violations);
    }
    GroupViolationsPage.prototype.ngOnInit = function () {
        if (this.violations.length < 1) {
            this.loadInfracoes();
        }
        else {
            this.copy = JSON.parse(JSON.stringify(this.violations));
        }
    };
    GroupViolationsPage.prototype.loadInfracoes = function () {
        var _this = this;
        this.infracoes.getInfrcoes().subscribe(function (result) {
            if (result.success) {
                _this.violations = result.data;
                _this.copy = JSON.parse(JSON.stringify(_this.violations));
            }
        });
    };
    GroupViolationsPage.prototype.onClose = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "<img src='assets/images/icons/icon_question.png' class='iconImage' alt=''>",
            message: 'Deseja realmente cancelar sua notificação?',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.viewCtrl.dismiss(_this.copy);
                    }
                },
                {
                    text: 'Não ',
                    handler: function () {
                        console.log('No selected!');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        alert.present();
    };
    GroupViolationsPage.prototype.onOpenNotification = function (item) {
        var _this = this;
        console.log(">>>>onOpenNotification", item);
        var modal = this.modalCtrl.create('ViolationPage', { violation: item }, {
            showBackdrop: false
        });
        modal.onDidDismiss(function (dataViolations) {
            var countChecked = 0;
            if (dataViolations) {
                item = JSON.parse(JSON.stringify(dataViolations));
                var index = _this.violations.map(function (violation) { return violation.id_infracao; }).indexOf(item.id_infracao);
                _this.violations[index] = item;
                _this.violations.map(function (violation) {
                    countChecked = 0;
                    violation.infracao.map(function (infracao) {
                        if (infracao.checked) {
                            countChecked++;
                        }
                    });
                    violation.countChecked = countChecked;
                });
            }
        });
        modal.present();
    };
    GroupViolationsPage.prototype.onSave = function () {
        console.log("--SAVE", this.violations);
        this.viewCtrl.dismiss((this.violations));
    };
    return GroupViolationsPage;
}());
GroupViolationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-group-violations',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\groupViolations\groupViolations.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Grupo de Infrações</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only class="my-style-for-modal" (click)="onClose()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onSave()"><ion-icon name="checkmark"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons start>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding *ngIf="violations != null">\n    <ion-col col-12 no-padding no-margin>\n      <ion-list no-lines>\n        <ion-item-sliding *ngFor="let item of violations" #slidingItem>\n          <ion-item no-lines (click)="onOpenNotification( item, $event)">\n            <span>\n              {{item.categoria}}\n            </span>\n            <span class="notification-ring"\n            *ngIf="item.countChecked || item.countChecked > 0">{{item.countChecked}}</span>\n            <ion-icon icon-small item-end>\n              <i class="icon icon-chevron-right"></i>\n            </ion-icon>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      <button ion-button round color="secondary" float-right\n              class="endService"  (click)="onSave()"\n              style="margin-right: 20px;"z>\n        Continuar\n      </button>\n    </ion-col>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\groupViolations\groupViolations.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_infracoes__["a" /* InfracoesService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_infracoes__["a" /* InfracoesService */]])
], GroupViolationsPage);

//# sourceMappingURL=groupViolations.js.map

/***/ })

});
//# sourceMappingURL=9.js.map