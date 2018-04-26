webpackJsonp([4],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationPageModule", function() { return ViolationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_violation_violation_module__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__violation__ = __webpack_require__(973);
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
            __WEBPACK_IMPORTED_MODULE_3__violation__["a" /* ViolationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__violation__["a" /* ViolationPage */]),
            __WEBPACK_IMPORTED_MODULE_1__components_violation_violation_module__["a" /* ViolationModule */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ViolationPageModule);

//# sourceMappingURL=violation.module.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__violation__ = __webpack_require__(972);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViolationModule = (function () {
    function ViolationModule() {
    }
    return ViolationModule;
}());
ViolationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__violation__["a" /* ViolationComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__violation__["a" /* ViolationComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__violation__["a" /* ViolationComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ViolationModule);

//# sourceMappingURL=violation.module.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolationComponent; });
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


var ViolationComponent = (function () {
    function ViolationComponent() {
        this.categories = null;
        this.categorieSelected = null;
        this.typeSelected = [];
        this.violations = [];
    }
    ViolationComponent.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](this.typeSelected ? this.typeSelected : []);
        }
    };
    ViolationComponent.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.violations.map(function (violation) {
            if (selectedValue == violation.id_categoria) {
                violation.checked = true;
                _this.categorieSelected = violation;
            }
        });
    };
    ViolationComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.categories = Object.assign({}, this.data[0]);
        this.categorieSelected = this.categories;
        if (this.data) {
            this.violations = this.data;
            this.typeSelected = this.violationsSelected ? this.violationsSelected : [];
            this.violations.map(function (violation) {
                violation.infracao.map(function (infracao) {
                    _this.typeSelected.map(function (violationSelected) {
                        if (violationSelected.codigo == infracao.codigo) {
                            infracao.checked = true;
                        }
                    });
                });
            });
        }
    };
    ViolationComponent.prototype.updateTypeSelected = function (item) {
        var index = this.typeSelected.map(function (item) { return item.codigo; }).indexOf(item.codigo);
        if (index < 0) {
            item.checked = true;
            this.typeSelected.push(item);
        }
        else {
            this.typeSelected.splice(index, 1);
        }
    };
    return ViolationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ViolationComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ViolationComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ViolationComponent.prototype, "violationsSelected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ViolationComponent.prototype, "content", void 0);
ViolationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'violation',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\violation\violation.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Infração</ion-title>\n    <ion-badge color="accent">{{typeSelected.length}}</ion-badge>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onEvent(\'onClose\', $event)"><ion-icon name="checkmark"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-segment ng-model="categories" full="true" color="secondary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button *ngFor="let type of violations" value={{type.infracao}}>\n      {{type.infracao}}\n    </ion-segment-button>\n  </ion-segment>-->\n  <h1>Infração</h1>\n  <ion-select [(ngModel)]="categories.id_categoria" name="categories.id_categoria" color="secondary" (ionChange)="onSelectChange($event)">\n    <ion-option *ngFor="let violation of violations" value="{{ violation.id_categoria }}">\n      {{ violation.categoria }}\n    </ion-option>\n  </ion-select>\n\n  <div *ngIf="categorieSelected">\n\n    <ion-list>\n      <ion-item *ngFor="let infracao of categorieSelected.infracao" text-wrap>\n        <ion-label item-title>{{infracao.codigo }}: {{infracao.item}}</ion-label>\n        <ion-checkbox color="secondary"\n                      (ionChange)="updateTypeSelected(infracao)"\n                      [ngModel]="infracao.checked"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n  </div>\n  <!--<div *ngIf="categories">\n    <ion-list>\n      <ion-item *ngFor="let type of filterItemsOfViolation(\'Lotes/Edificações\')" text-wrap>\n        <ion-label item-title>{{type.title}}</ion-label>\n        <ion-checkbox color="secondary"\n                      (ionChange)="updateTypeSelected(type)"\n                      [ngModel]="type.checked"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </div>-->\n\n  <!--<div *ngIf="categories">\n    <ion-list>\n      <ion-item *ngFor="let type of filterItemsOfViolation(\'Logradouros públicos\')" text-wrap>\n        <ion-label item-title>{{type.title}}</ion-label>\n        <ion-checkbox color="secondary" (ionChange)="updateTypeSelected(type)"\n                      [ngModel]="type.checked"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </div>-->\n  <div style="margin-bottom: 30px;" *ngIf="false">\n    <button ion-button full color="secondary" (click)="onEvent(\'onSaveViolations\', typeSelected, $event)">Salvar</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\violation\violation.html"*/
    }),
    __metadata("design:paramtypes", [])
], ViolationComponent);

//# sourceMappingURL=violation.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_infracoes__ = __webpack_require__(974);
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
        this.params = {
            title: "Infrações",
            events: {},
            data: null
        };
        this.violationsSelected = {};
        this.violationsSelected = navParams.get('violations') ? navParams.get('violations') : {};
        this.params = {
            events: {
                'onClose': function (item) {
                    viewCtrl.dismiss(item ? item : []);
                },
                'onSaveViolations': function (item) {
                    viewCtrl.dismiss(item);
                },
            }
        };
    }
    ViolationPage.prototype.ngOnInit = function () {
        this.loadInfracoes();
    };
    ViolationPage.prototype.loadInfracoes = function () {
        var _this = this;
        this.infracoes.getInfrcoes().subscribe(function (result) {
            if (result.success) {
                _this.params.data = result.data;
            }
        });
    };
    return ViolationPage;
}());
ViolationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-violation',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\violation\violation.html"*/'<violation *ngIf="params.data"\n  [data]="params.data"\n  [violationsSelected]="violationsSelected"\n  [events]="params.events"></violation>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\violation\violation.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_infracoes__["a" /* InfracoesService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_infracoes__["a" /* InfracoesService */]])
], ViolationPage);

//# sourceMappingURL=violation.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfracoesService; });
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

/***/ })

});
//# sourceMappingURL=4.js.map