webpackJsonp([1],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailServicePageModule", function() { return DetailServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_detail_service_detail_service_module__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_pipes_titlePage__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailServicePageModule = (function () {
    function DetailServicePageModule() {
    }
    return DetailServicePageModule;
}());
DetailServicePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__detail_service__["a" /* DetailServicePage */],
            __WEBPACK_IMPORTED_MODULE_4__utils_pipes_titlePage__["a" /* TitlePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__detail_service__["a" /* DetailServicePage */]),
            __WEBPACK_IMPORTED_MODULE_1__components_detail_service_detail_service_module__["a" /* DetailServiceModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], DetailServicePageModule);

//# sourceMappingURL=detail-service.module.js.map

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

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_timeline_timeline_module__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_pipes_timelineComments__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DetailServiceModule = (function () {
    function DetailServiceModule() {
    }
    return DetailServiceModule;
}());
DetailServiceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detail_service__["a" /* DetailServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_5__utils_pipes_timelineComments__["a" /* TimelineComments */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_service__["a" /* DetailServiceComponent */]),
            __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_timeline_timeline_module__["a" /* TimelineModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__detail_service__["a" /* DetailServiceComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], DetailServiceModule);

//# sourceMappingURL=detail-service.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailServiceComponent; });
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


var DetailServiceComponent = (function () {
    function DetailServiceComponent() {
    }
    DetailServiceComponent.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    return DetailServiceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], DetailServiceComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], DetailServiceComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], DetailServiceComponent.prototype, "content", void 0);
DetailServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'detail-service',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\detail-service\detail-service.html"*/'<ion-grid no-padding>\n  <ion-row *ngIf="data != null && data.length >= 0">\n     <ion-col col-12>\n      <ion-list-header header-section padding-bottom padding-horizontal>\n        <ion-icon icon-small item-left class="iconItem"\n                  [ngClass]="data[0].status_id == 1 ? \'iconColorPending\' : (data[0].status_id == 2 ? \'iconColorFinalized\' : \'iconColorwWaiting\')">\n          <i class="icon icon-alarm"></i>\n        </ion-icon>\n        <div>\n          <h2 item-title text-capitalize margin-top text-wrap class="itemTitleDetail">{{data[0].tipo}}</h2>\n          <p item-subtitle no-margin text-wrap class="itemSubTitleDetail">{{data[0].numero_atendimento}}</p>\n        </div>\n        <ion-note item-end class="ionNoteDate">\n          <span class="itemSubTitleDetail">{{data[0].data_abertura | date: \'dd/MM/yyyy\'}}</span>\n        </ion-note>\n      </ion-list-header>\n      <ion-list no-margin class="details">\n        <ion-item-sliding>\n          <ion-item no-lines>\n            <ion-icon name="pin" style="color: #1eb3cc"></ion-icon>\n            <span>{{data[0].endereco}}</span>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-icon name="md-person" style="color: #1eb3cc"></ion-icon>\n            <span>{{data[0].nome_solicitante}}</span>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-icon name="md-attach" style="color: #1eb3cc"></ion-icon>\n            <span *ngFor="let attach of data[0].anexos">\n              <a href="{{ attach }}" onclick="window.open(this.href, \'_system\', \'location=yes\');" >{{ attach.split(\'.\').pop() }}</a>\n            </span>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      <div style="padding: 7px 28px 0px 28px;">\n        <p card-body-text>\n          {{data[0].descricao}}\n        </p>\n      </div>\n\n       <ion-row padding *ngIf="data[0].status_id == 1">\n         <ion-col col-6>\n           <button color="secondary" ion-button round block class="endService"\n                   (click)="onEvent(\'onEndService\', data[0], $event)">Finalizar Ocorrência</button>\n         </ion-col>\n\n         <ion-col col-6>\n           <button color="secondary" ion-button round block class="openService"\n                   (click)="onEvent(\'onOpenService\', data[0], $event)">Gerar Notificação</button>\n         </ion-col>\n       </ion-row>\n\n       <ion-row padding *ngIf="data[0].status_id == 3">\n         <ion-col col-6>\n           <button color="secondary" ion-button round block class="endService"\n                   (click)="onEvent(\'onCloseNotification\', data[0], $event)">Finalizar Ocorrência</button>\n         </ion-col>\n\n         <ion-col col-6>\n           <button color="secondary" ion-button round block class="openService"\n                   (click)="onEvent(\'onEndNotification\', data[0], $event)">Gerar Notificação</button>\n         </ion-col>\n       </ion-row>\n\n      <div class="timeline" *ngIf="data[0].status_id == 2 || data[0].status_id == 3 ">\n        <div style="padding-bottom: 10px;">\n          <h4 ion-text color="accent" title>Linha do tempo</h4>\n        </div>\n        <ion-list *ngFor="let item of data" class="list-inset">\n          <!--Text Header Top-->\n          <ion-list-header ion-affix [content]="content">\n            <ion-item no-margin no-padding no-lines>\n              <h4 ion-text color="accent" title>{{item.titulo}}</h4>\n              <div item-content item-subtitle>\n                {{item.data_cadastro | date:"dd/MM/yy"}}\n              </div>\n            </ion-item>\n          </ion-list-header>\n          <!--Text Content List -->\n          <ion-card no-margin>\n            <ion-card-content>\n              <div [innerHTML]="item.comentario | comment"></div>\n              <h2>Responsável: {{item.nome}}</h2>\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </div>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\detail-service\detail-service.html"*/
    }),
    __metadata("design:paramtypes", [])
], DetailServiceComponent);

//# sourceMappingURL=detail-service.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelineModule = (function () {
    function TimelineModule() {
    }
    return TimelineModule;
}());
TimelineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], TimelineModule);

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
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

/**
 * Generated class for the TimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'timeline',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\timeline\timeline.html"*/'<h1>TIMELINE</h1>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\timeline\timeline.html"*/
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimelineComments = (function () {
    function TimelineComments() {
    }
    TimelineComments.prototype.transform = function (value, args) {
        var result = "";
        if (!value)
            return value;
        if (value.indexOf('|') == -1) {
            result = "<h2 card-title margin-bottom>" + value + "</h2>";
            return result;
        }
        else {
            var comment = value.split('|');
            var htmlItem = "";
            comment.map(function (item) {
                htmlItem = "<h2 card-title margin-bottom>" + item + "</h2>";
                result = result + htmlItem;
            });
            return result;
        }
    };
    return TimelineComments;
}());
TimelineComments = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'comment' })
], TimelineComments);

//# sourceMappingURL=timelineComments.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ocorrencias__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notificacao__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailServicePage = (function () {
    function DetailServicePage(navCtrl, navParams, modalCtrl, alertCtrl, ocorrenciaService, auth, notificacao) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.ocorrenciaService = ocorrenciaService;
        this.auth = auth;
        this.notificacao = notificacao;
        this.params = {};
        this.colorAvatar = '#4FC3F7';
        this.ocorrencia = {};
        this.items = {};
        this.ocorrencia = navParams.get('ocorrencia');
        console.log("------", this.ocorrencia);
        if (this.ocorrencia) {
            if (this.ocorrencia.status_id == 1) {
                this.ocorrenciaService.occurence(this.ocorrencia.id_ocorrencia).subscribe(function (occurence) {
                    if (occurence.success) {
                        _this.items = occurence.data;
                        if (!_this.items[0].lida) {
                            if (_this.items[0].status_id == 1) {
                                ocorrenciaService.occurenceRead(_this.items[0].id).subscribe(function () {
                                });
                            }
                        }
                    }
                });
            }
            else if (this.ocorrencia.status_id == 2) {
                ocorrenciaService.occurenceClose(this.ocorrencia.id_ocorrencia).subscribe(function (occurence) {
                    if (occurence.success) {
                        _this.items = occurence.data;
                    }
                });
                try {
                    console.log(">>>>ID", this.ocorrencia._id);
                    ocorrenciaService.occurenceClosedRead(this.ocorrencia._id).subscribe(function () {
                    });
                }
                catch (e) {
                }
            }
            else {
                notificacao.notificationDetails(this.ocorrencia.id_ocorrencia).subscribe(function (occurence) {
                    if (occurence.success) {
                        _this.items = occurence.data;
                        console.log('-------Occurence', _this.items[0].id_notificacao);
                        notificacao.notificationRead(_this.items[0].id_notificacao).subscribe(function (occurence) {
                        });
                    }
                });
            }
        }
        this.params = {
            events: {
                'onEndService': function (occurence) {
                    alertComments(occurence);
                },
                'onCloseNotification': function (notification) {
                    console.log("---onCloseNotification");
                    closeNotification(notification);
                },
                'onEndNotification': function (notification) {
                    endNotification(notification);
                },
                'onOpenService': function (item) {
                    navCtrl.push("NotificationPage", { idService: item.id });
                },
            }
        };
        function endNotification(notification) {
            var modal = modalCtrl.create('ComentariosOcorrenciaPage', { occurence: notification });
            modal.onDidDismiss(function (data) {
                var dataClose = {
                    "comentario": data.comentario,
                    "id_ocorrencia": data.ocorrenciaData.id,
                    "id_usuario": auth.getuserId()
                };
                ocorrenciaService.closeOccurence(dataClose)
                    .then(function (result) {
                    if (result.json().success) {
                        successCloseNotification();
                    }
                    else {
                        error(result.json().data);
                    }
                }).catch(function (err) {
                    error(err);
                });
            });
            modal.present();
        }
        function closeNotification(notification) {
            console.log('-----closeNotification', notification);
            var dataClose = {
                "id_ocorrencia": notification.id_ocorrencia,
                "id_usuario": auth.getuserId()
            };
            notificacao.closeNotification(dataClose)
                .then(function (result) {
                if (result.json().success) {
                    successCloseNotification();
                }
                else {
                    error(result.json().data);
                }
            }).catch(function (err) {
                error(err);
            });
        }
        function alertComments(occurence) {
            var modal = modalCtrl.create('ComentariosOcorrenciaPage', { occurence: occurence });
            modal.onDidDismiss(function (data) {
                var dataOccurence = {
                    "comentario": data.comentario,
                    "id_ocorrencia": data.ocorrenciaData.id,
                    "id_usuario": auth.getuserId()
                };
                ocorrenciaService.closeOccurence(dataOccurence)
                    .then(function (result) {
                    if (result.json().success) {
                        success();
                    }
                    else {
                        error(result.json().data);
                    }
                }).catch(function (err) {
                    error(err);
                });
            });
            modal.present();
        }
        function successCloseNotification() {
            var alert = alertCtrl.create({
                title: 'Sucesso!',
                subTitle: 'Notificação finalizada com sucesso!',
                buttons: [{
                        text: 'Fechar',
                        handler: function () {
                            navCtrl.setRoot("WaitingPage");
                        }
                    }]
            });
            alert.present();
        }
        function success() {
            var alert = alertCtrl.create({
                title: 'Sucesso!',
                subTitle: 'Ocorrência finalizada com sucesso!',
                buttons: [{
                        text: 'Fechar',
                        handler: function () {
                            navCtrl.setRoot("DashboardPage");
                        }
                    }]
            });
            alert.present();
        }
        function error(err) {
            var alert = alertCtrl.create({
                title: 'Atenção!',
                subTitle: err,
                buttons: [
                    {
                        text: 'Fechar',
                        handler: function () {
                            navCtrl.setRoot("DashboardPage");
                        }
                    }
                ]
            });
            alert.present();
        }
    }
    DetailServicePage.prototype.titlePage = function (status) {
        return status;
    };
    DetailServicePage.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    return DetailServicePage;
}());
DetailServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail-service',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\detail-service\detail-service.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left title-page>\n      {{!isEmptyObject(items) ? (items[0].status_id | titlepage) : ""}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Content-->\n<ion-content>\n  <detail-service *ngIf="!isEmptyObject(items)"\n                  [data]="items"\n                  [events]="params.events">\n  </detail-service>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\detail-service\detail-service.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_ocorrencias__["a" /* OcorrenciasService */], __WEBPACK_IMPORTED_MODULE_3__services_notificacao__["a" /* NotificacaoService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_ocorrencias__["a" /* OcorrenciasService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__services_notificacao__["a" /* NotificacaoService */]])
], DetailServicePage);

//# sourceMappingURL=detail-service.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitlePage = (function () {
    function TitlePage() {
    }
    TitlePage.prototype.transform = function (value, args) {
        if (!value)
            return value;
        if (value == 1) {
            return 'Atendimento';
        }
        else if (value == 2) {
            return 'Atendimento Finalizado';
        }
        else if (value == 3) {
            return 'Atendimento Notificado';
        }
        else {
            return "Atendimento";
        }
    };
    return TitlePage;
}());
TitlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'titlepage' })
], TitlePage);

//# sourceMappingURL=titlePage.js.map

/***/ })

});
//# sourceMappingURL=1.js.map