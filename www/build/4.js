webpackJsonp([4],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notification_notification_module__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = (function () {
    function NotificationPageModule() {
    }
    return NotificationPageModule;
}());
NotificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */]),
            __WEBPACK_IMPORTED_MODULE_1__components_notification_notification_module__["a" /* NotificationModule */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

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

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], NotificationModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
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


var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "violations", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], NotificationComponent.prototype, "content", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'notification',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\notification\notification.html"*/'<div class="title-components">\n  <span style="text-transform: none;">Infração</span>\n</div>\n\n<div class="block-insert">\n  <span class="compomets"> Default</span>\n  <button ion-fab color="primary" class="buttonFab" (click)="onEvent(\'onOpenViolation\', $event)">+</button>\n</div>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\notification\notification.html"*/
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contribuinte__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notificacao__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








function validateViolations(control) {
    return {
        validateViolations: {
            valid: false
        }
    };
}
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, modalCtrl, geolocation, geocoder, formBuilder, alertCtrl, contribuinte, notificacao, auth, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.geocoder = geocoder;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.contribuinte = contribuinte;
        this.notificacao = notificacao;
        this.auth = auth;
        this.platform = platform;
        this.violations = [];
        this.violationsChecked = 0;
        this.idService = navParams.get("idService");
        this.params = {
            title: "Cadastrar Notificação",
            data: []
        };
        this.notificacaoForm = formBuilder.group({
            logradouro: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)])],
            numero: [],
            complemento: [],
            lote: [],
            quadra: [],
            nome_razaosocial_proprietario: [],
            cpf_cnpj_proprietario: [],
            prazo: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            violations: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
        });
    }
    NotificationPage.prototype.onOpenViolation = function () {
        var _this = this;
        var modal = this.modalCtrl.create('GroupViolationsPage', { violations: this.violations });
        modal.onDidDismiss(function (dataViolations) {
            if (dataViolations) {
                _this.violationsChecked = 0;
                _this.violations = dataViolations;
                _this.violations.map(function (violation) {
                    console.log(">>>violation", violation);
                    violation.infracao.map(function (infracao) {
                        console.log(">>>infracao", infracao);
                        if (infracao.checked) {
                            _this.violationsChecked++;
                        }
                    });
                    console.log(">>>violationsChecked", _this.violationsChecked);
                });
                if (_this.violationsChecked > 0) {
                    _this.notificacaoForm.controls['violations'].setValue(dataViolations);
                }
                else {
                    _this.notificacaoForm.controls['violations'].setValue(null);
                }
            }
        });
        modal.present();
    };
    NotificationPage.prototype.onSave = function () {
        var _this = this;
        var alertMessage = "<div>" +
            "<p>55555/2018</p>" +
            "<p class='iconMessage'>" +
            "<ion-icon icon-small item-left class='iconItem' style='color: #65c55a !important;'>" +
            "<i class='icon icon-alarm'></i>" +
            "</ion-icon>" +
            "</p>" +
            "</div>";
        var alert = this.alertCtrl.create({
            title: "<h2>Infração Gerada</h2>",
            message: alertMessage,
            buttons: [
                {
                    text: 'Continuar',
                    handler: function () {
                        _this.navCtrl.setRoot("DashboardPage");
                    }
                }
            ],
            cssClass: 'alertConfirme'
        });
        alert.present();
        /* var violations_id = []
         this.violations.map((violation) => {
           violation.infracao.map((infracao) =>{
             if(infracao.checked){
               violations_id.push(infracao.id_infracao)
             }
           })
         })
     
         console.log(">>>violations_id",violations_id)
     
         var now = moment(new Date()).format("YYYY-MM-DD").split('-')
         var numero_notificacao = now[0]+now[1]+now[2]+this.idService
         var notification = {
           complemento : this.params.data.complemento ? this.params.data.complemento : null,
           cpf_cnpj_proprietario : this.params.data.cpf_cnpj_proprietario ? this.params.data.cpf_cnpj_proprietario : null,
           logradouro : this.params.data.logradouro,
           lote : this.params.data.lote ? this.params.data.lote : null,
           nome_razaosocial_proprietario  : this.params.data.nome_razaosocial_proprietario ? this.params.data.nome_razaosocial_proprietario : null,
           numero : this.params.data.numero ? this.params.data.numero : null,
           quadra : this.params.data.quadra ? this.params.data.quadra : null,
           prazo  : this.params.data.prazo,
           infracoes  : violations_id,
           id_ocorrencia  : this.idService,
           data_cadastro  : moment(new Date()).format("YYYY-MM-DD"),
           numero_notificacao  : numero_notificacao,
           tipo_notificacao : "autuação",
           id_usuario : this.auth.getuserId()
         }
     
         this.notificacao.notification(notification)
           .then((result) => {
             if (result.json().success) {
               this.navCtrl.setRoot("DashboardPage");
             }else{
               this.error(result.json().data)
             }
           }).catch((err) => {
     
           });
     
         //this.navCtrl.setRoot("DashboardPage");*/
    };
    NotificationPage.prototype.alert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: msg,
            buttons: ['Fechar']
        });
        alert.present();
    };
    NotificationPage.prototype.error = function (err) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: err,
            buttons: [
                {
                    text: 'Fechar',
                    handler: function () {
                        _this.navCtrl.setRoot("DashboardPage");
                    }
                }
            ]
        });
        alert.present();
    };
    NotificationPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.obtenerPosicion(); }).catch(function (error) {
        });
        /* this.geolocation.getCurrentPosition().then((resp) => {
           console.log(">>getCurrentPosition<<",resp)
           let request: GeocoderRequest = {
             position: new LatLng(resp.coords.latitude, resp.coords.longitude)
           }
           this.geocoder.geocode(request)
             .then((results: GeocoderResult) => {
               console.log(results)
               this.params.data.logradouro = results[0].thoroughfare
               this.params.data.numero = results[0].subThoroughfare
               /!*let address = [
                 (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""),
                 results[0].locality
               ].join(", ");
               console.log(">>DATA_:",address)*!/
             })
     
         }).catch((error) => {
           console.log('Error getting location', error);
         });*/
    };
    NotificationPage.prototype.obtenerPosicion = function () {
        var _this = this;
        var options = {
            timeout: 10000,
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(options).then(function (response) {
            var request = {
                position: new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](response.coords.latitude, response.coords.longitude)
            };
            _this.geocoder.geocode(request)
                .then(function (results) {
                if (!results[0].thoroughfare) {
                    alert("Não foi possivel verificar sua posição. Insira o endereço manualmente");
                }
                else {
                    _this.params.data.logradouro = results[0].thoroughfare;
                    _this.params.data.numero = results[0].subThoroughfare;
                }
            });
        })
            .catch(function (error) {
        });
    };
    NotificationPage.prototype.searchIntimate = function (value) {
        var _this = this;
        if (value.logradouro) {
            if (value.logradouro.length > 0) {
                var search = {};
                search.logradouro = value.logradouro;
                if (value.numero) {
                    search.numero = value.numero;
                }
                if (value.lote) {
                    search.lote = value.lote;
                }
                if (value.quadra) {
                    search.quadra = value.quadra;
                }
                this.contribuinte.getContribuinte(search).then(function (result) {
                    if (result.json().success) {
                        if (result.json().data.length == 0) {
                            alert("Não foi possivel localizar um proprietário com base no endereço inserido.");
                        }
                        else if (result.json().data.length == 1) {
                            _this.params.data.nome_razaosocial_proprietario = result.json().data[0].nome_razaosocial_proprietario ? result.json().data[0].nome_razaosocial_proprietario : "";
                            _this.params.data.cpf_cnpj_proprietario = result.json().data[0].cpf_cnpj_proprietario ? result.json().data[0].cpf_cnpj_proprietario : "";
                            _this.params.data.numero = result.json().data[0].numero ? result.json().data[0].numero : "";
                            _this.params.data.quadra = result.json().data[0].quadra ? result.json().data[0].quadra : "";
                            _this.params.data.lote = result.json().data[0].lote ? result.json().data[0].lote : "";
                        }
                        else {
                            _this.selectedIntimate(result.json().data);
                        }
                    }
                    else {
                    }
                }).catch(function (err) {
                });
            }
        }
    };
    NotificationPage.prototype.selectedIntimate = function (intimate) {
        var _this = this;
        var modal = this.modalCtrl.create('IntimatePage', { intimates: intimate });
        modal.onDidDismiss(function (dataIntimate) {
            _this.params.data.nome_razaosocial_proprietario = dataIntimate.nome_razaosocial_proprietario ? dataIntimate.nome_razaosocial_proprietario : "";
            _this.params.data.cpf_cnpj_proprietario = dataIntimate.cpf_cnpj_proprietario ? dataIntimate.cpf_cnpj_proprietario : "";
            _this.params.data.numero = dataIntimate.numero ? dataIntimate.numero : "";
            _this.params.data.quadra = dataIntimate.quadra ? dataIntimate.quadra : "";
            _this.params.data.lote = dataIntimate.lote ? dataIntimate.lote : "";
        });
        modal.present();
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\notification\notification.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left>{{params.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Content-->\n<ion-content padding>\n  <ion-grid>\n    <form [formGroup]="notificacaoForm">\n      <h4 ion-text color="accent" title>Endereço do notificado</h4>\n      <ion-row>\n        <ion-col>\n          <ion-item no-padding [ngClass]="{\'error-border\':!notificacaoForm.controls.logradouro.valid && notificacaoForm.controls.logradouro.touched}">\n            <ion-input required type="text" [(ngModel)]="params.data.logradouro" formControlName="logradouro"></ion-input>\n            <ion-icon name="pin" item-right (click)="getCurrentPosition()" style="color: #1eb3cc"></ion-icon>\n          </ion-item>\n          <ion-item no-padding *ngIf="notificacaoForm.controls.logradouro.hasError(\'required\') && notificacaoForm.controls.logradouro.touched">\n            <p>Desculpe, o campo logradouro é obrigatório!</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-item no-padding>\n            <ion-input placeholder="Número" type="text" [(ngModel)]="params.data.numero" formControlName="numero"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8>\n          <ion-item no-padding>\n            <ion-input placeholder="Complemento" type="text" [(ngModel)]="params.data.complemento" formControlName="complemento"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-item no-padding>\n            <ion-input placeholder="Lote" type="text" [(ngModel)]="params.data.lote" formControlName="lote"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8>\n          <ion-item no-padding>\n            <ion-input placeholder="Quadra" type="text" [(ngModel)]="params.data.quadra" formControlName="quadra"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-buttons style="margin-top:17px">\n        <button ion-button round color="secondary" class="endService"\n                [disabled]="params.data.logradouro ? (params.data.logradouro.length > 0 ? false : true) : true"\n                (click)="searchIntimate(notificacaoForm.value)">\n          Buscar Proprietário\n        </button>\n      </ion-buttons>\n      <div>\n        <ion-row style="padding-top: 25px">\n          <h4 ion-text color="accent" title>Intimado</h4>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Nome" type="text"\n                         [(ngModel)]="params.data.nome_razaosocial_proprietario"\n                         formControlName="nome_razaosocial_proprietario"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="CPF"\n                         type="text"\n                         [(ngModel)]="params.data.cpf_cnpj_proprietario"\n                         formControlName="cpf_cnpj_proprietario"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div>\n        <ion-row style="padding-top: 25px">\n          <h4 ion-text color="accent" title>Prazo para regularização</h4>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding margin-top [ngClass]="{\'error-border\':!notificacaoForm.controls.prazo.valid && notificacaoForm.controls.prazo.touched}">\n              <ion-input required placeholder="Prazo" type="number"\n                         [(ngModel)]="params.data.prazo" formControlName="prazo"\n                         min="1"></ion-input>\n            </ion-item>\n            <ion-item no-padding *ngIf="notificacaoForm.controls.prazo.hasError(\'required\') && notificacaoForm.controls.prazo.touched">\n              <p>Desculpe, o prazo é obrigatório!</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div style="margin-bottom: 10px;">\n        <ion-row style="padding-top: 25px">\n          <h4 ion-text color="accent" title>Infração</h4>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="compomets">{{violationsChecked == 0 ? "Sem infração vinculada" : (violationsChecked) +" infrações selecionadas"}}</span>\n            <button ion-fab color="primary" class="buttonFab" (click)="onOpenViolation()">+</button>\n          </ion-col>\n          <ion-item no-padding margin-top style="width: 0px; height: 0px;"\n                    [ngClass]="{\'error-border\':!notificacaoForm.controls.violations.valid && notificacaoForm.controls.violations.touched}">\n            <ion-input required formControlName="violations" type="hidden"></ion-input>\n          </ion-item>\n          <ion-item no-padding *ngIf="notificacaoForm.controls.violations.hasError(\'required\') && notificacaoForm.controls.violations.touched">\n            <p>Selecione ao menos uma infração!</p>\n          </ion-item>\n        </ion-row>\n      </div>\n      <button ion-button round color="secondary"\n              class="endService" [disabled]="!notificacaoForm.valid" (click)="onSave()"\n              style="margin-top: -20px;">\n        Salvar\n      </button>\n      <ion-row style="margin-bottom: 39px;">\n        </ion-row>\n    </form>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\notification\notification.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_contribuinte__["a" /* ContribuinteService */], __WEBPACK_IMPORTED_MODULE_6__services_notificacao__["a" /* NotificacaoService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* Geocoder */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_contribuinte__["a" /* ContribuinteService */],
        __WEBPACK_IMPORTED_MODULE_6__services_notificacao__["a" /* NotificacaoService */],
        __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */]])
], NotificationPage);

//this.nativeGeocoder.reverseGeocode(resp.coords.latitude,resp.coords.longitude)
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContribuinteService; });
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



var ContribuinteService = (function () {
    function ContribuinteService(http) {
        this.http = http;
    }
    ContribuinteService.prototype.getContribuinte = function (data) {
        var url = "/contribuinte";
        return this.http.post(url, data).toPromise();
        //return this.http.get(`/ocorrencias/${userId}`).toPromise();
    };
    return ContribuinteService;
}());
ContribuinteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
], ContribuinteService);

//# sourceMappingURL=contribuinte.js.map

/***/ })

});
//# sourceMappingURL=4.js.map