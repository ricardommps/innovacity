webpackJsonp([14],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout1Module", function() { return LoginLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_1__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginLayout1Module = (function () {
    function LoginLayout1Module() {
    }
    return LoginLayout1Module;
}());
LoginLayout1Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], LoginLayout1Module);

//# sourceMappingURL=login-layout-1.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginLayout1 = (function () {
    function LoginLayout1(auth, formBuilder) {
        var _this = this;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'usuario': _this.usuario,
                    'senha': _this.senha
                });
            }
        };
        this.authForm = formBuilder.group({
            usuario: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30)])],
            senha: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    LoginLayout1.prototype.onSubmit = function (value) {
        if (this.authForm.valid) {
            var event_1 = 'onLogin';
            this.events[event_1]({
                'usuario': this.usuario,
                'senha': this.senha
            });
        }
    };
    return LoginLayout1;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], LoginLayout1.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], LoginLayout1.prototype, "events", void 0);
LoginLayout1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login-layout-1',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\login\layout-1\login.html"*/'<!-- Themes Login + logo 2 -->\n<ion-content has-header class="loginContent">\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row class="logo-row">\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img [src]="data.logo">\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <div class="login-box">\n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)" class="loginForm">\n        <ion-row>\n          <ion-col>\n            <ion-item padding margin-top>\n              <!--<ion-item padding margin-top [ngClass]="{\'error-border\':!authForm.controls.usuario.valid && authForm.controls.usuario.touched}">-->\n              <ion-input required type="text" placeholder="{{data.usuario}}" [(ngModel)]="usuario" formControlName="usuario"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item padding>\n              <ion-input required type="password" placeholder="{{data.senha}}" [(ngModel)]="senha" formControlName="senha"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!--<ion-item *ngIf="authForm.controls.usuario.hasError(\'required\') && authForm.controls.usuario.touched">\n          <p>Desculpe, o nome de usuário é obrigatório!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.usuario.hasError(\'pattern\') && authForm.controls.usuario.touched">\n          <p>Desculpe, somente letras minúsculas e maiúsculas são permitidas!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.usuario.hasError(\'minlength\') && authForm.controls.usuario.touched">\n          <p>Desculpe, o nome de usuário deve conter mais de 8 caracteres!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.usuario.hasError(\'maxlength\') && authForm.controls.usuario.touched">\n          <p>Desculpe, o nome de usuário não pode conter mais de 30 caracteres!</p>\n        </ion-item>-->\n        <!---Input field password-->\n\n        <!--<ion-item *ngIf="authForm.controls.senha.hasError(\'required\') && authForm.controls.senha.touched">\n          < <p>Desculpe, s senha é obrigatório!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.senha.hasError(\'minlength\') && authForm.controls.senha.touched">\n          <p>Desculpe, senha deve conter mais de 8 caracteres!</p>\n        </ion-item>-->\n\n        <ion-row>\n          <ion-col>\n            <button ion-button default-button full color="secondary"\n                    class="loginSubmit"\n                    [disabled]="!authForm.valid"\n                    type="submit">{{data.login}}</button>\n            <span class="rememberPassword" (click)="onEvent(\'onNewPassword\')">Esqueci a senha</span>\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n    </div>\n\n    <!---Share Section-->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\login\layout-1\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], LoginLayout1);

//# sourceMappingURL=login-layout-1.js.map

/***/ })

});
//# sourceMappingURL=14.js.map