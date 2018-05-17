webpackJsonp([6,15],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout1Module", function() { return LoginLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_1__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(81);
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

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_layout_1_login_layout_1_module__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_4__components_login_layout_1_login_layout_1_module__["LoginLayout1Module"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(81);
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
        selector: 'login-layout-1',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\login\layout-1\login.html"*/'<!-- Themes Login + logo 2 -->\n<ion-content has-header class="loginContent testelogin">\n  <ion-grid no-padding *ngIf="data != null" style="margin-top: 50px;">\n    <ion-row>\n      <ion-col text-center>\n        <img [src]="data.logo">\n      </ion-col>\n    </ion-row>\n\n    <div class="login-box">\n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)" class="loginForm">\n        <ion-row>\n          <ion-col>\n            <ion-item padding margin-top>\n              <!--<ion-item padding margin-top [ngClass]="{\'error-border\':!authForm.controls.usuario.valid && authForm.controls.usuario.touched}">-->\n              <ion-input required type="text" placeholder="{{data.usuario}}" [(ngModel)]="usuario" formControlName="usuario"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item padding>\n              <ion-input required type="password" placeholder="{{data.senha}}" [(ngModel)]="senha" formControlName="senha"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!--<ion-item *ngIf="authForm.controls.usuario.hasError(\'required\') && authForm.controls.usuario.touched">\n          <p>Desculpe, o nome de usuário é obrigatório!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.usuario.hasError(\'pattern\') && authForm.controls.usuario.touched">\n          <p>Desculpe, somente letras minúsculas e maiúsculas são permitidas!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.usuario.hasError(\'minlength\') && authForm.controls.usuario.touched">\n          <p>Desculpe, o nome de usuário deve conter mais de 8 caracteres!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.usuario.hasError(\'maxlength\') && authForm.controls.usuario.touched">\n          <p>Desculpe, o nome de usuário não pode conter mais de 30 caracteres!</p>\n        </ion-item>-->\n        <!---Input field password-->\n\n        <!--<ion-item *ngIf="authForm.controls.senha.hasError(\'required\') && authForm.controls.senha.touched">\n          < <p>Desculpe, s senha é obrigatório!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.senha.hasError(\'minlength\') && authForm.controls.senha.touched">\n          <p>Desculpe, senha deve conter mais de 8 caracteres!</p>\n        </ion-item>-->\n        <div style="margin-top: 40px;">\n          <ion-row>\n            <ion-col text-center>\n              <button ion-button default-button color="secondary"\n                      [disabled]="!authForm.valid"\n                      type="submit"\n                      class="loginSubmit">{{data.login}}</button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col text-center>\n              <span (click)="onEvent(\'onNewPassword\')">Esqueci a senha</span>\n            </ion-col>\n          </ion-row>\n        </div>\n      </form>\n    </div>\n\n    <!---Share Section-->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\components\login\layout-1\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], LoginLayout1);

//# sourceMappingURL=login-layout-1.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, menu, auth, alertCtrl, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.params = {};
        this.user = {};
        this.params.data = {
            "usuario": "Login",
            "senha": "Senha",
            "register": "Register",
            "login": "Acessar",
            "skip": "Skip",
            "logo": "assets/images/logo/logo-simplificado-rgb.png"
        };
        this.params.events = {
            onLogin: function (params) {
                auth.login(params).then(function (user) {
                    if (user.json().success) {
                        if (user.json().data.length == 0) {
                            loginError('Usuário ou senha inválidos.');
                        }
                        else {
                            if (user.json().data[0].atualizar_senha) {
                                presentPrompt(user.json().data[0].usuario);
                            }
                            else {
                                loginSucess(user.json().data[0]);
                            }
                        }
                    }
                }).catch(function (err) {
                    loginError('Ocorreu um erro ao processar o seu pedido. Por favor tente novamente.');
                });
            },
            onNewPassword: function () {
                __WEBPACK_IMPORTED_MODULE_1_ionic_native__["c" /* StatusBar */].styleDefault();
                alertNewPassword();
            },
        };
        function alertNewPassword() {
            var alert = alertCtrl.create({
                title: 'Solicitar uma nova senha de acesso',
                cssClass: 'alert',
                inputs: [
                    {
                        name: 'userInfo',
                        placeholder: 'Usuario ou E-mail',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Salvar',
                        handler: function (data) {
                            if (data.userInfo.length > 0) {
                                var userInfo = {
                                    "userInfo": data.userInfo
                                };
                                auth.newPassword(userInfo).then(function (resulte) {
                                    if (resulte.json().success) {
                                        __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Splashscreen */].hide();
                                        confirmeSendEmail(resulte.json().data);
                                    }
                                    else {
                                        __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Splashscreen */].hide();
                                        loginError(resulte.json().data);
                                        return false;
                                    }
                                }).catch(function (err) {
                                    loginError('Ocorreu um erro ao processar o seu pedido. Por favor tente novamente.');
                                    return false;
                                });
                            }
                            else {
                                presentToastAlert("É obrigatório o preenchimento do usuário ou do e-mail ");
                                return false;
                            }
                        }
                    }
                ]
            });
            alert.present();
        }
        function presentToastAlert(msg) {
            var toast = toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'middle'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
        function confirmeSendEmail(msg) {
            var alert = alertCtrl.create({
                title: 'Secesso!',
                subTitle: msg,
                buttons: ['Ok']
            });
            alert.present();
        }
        function presentPrompt(usuario) {
            var alert = alertCtrl.create({
                title: 'Nova senha',
                inputs: [
                    {
                        name: 'senhaAntiga',
                        placeholder: 'Senha atual',
                        type: 'password'
                    },
                    {
                        name: 'novaSenha',
                        placeholder: 'Nova Senha',
                        type: 'password'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Salvar',
                        handler: function (data) {
                            if (true) {
                                var user = {
                                    "usuario": usuario,
                                    "senhaAntiga": data.senhaAntiga,
                                    "novaSenha": data.novaSenha
                                };
                                auth.updatePassword(user).then(function (user) {
                                    if (user.json().success) {
                                        loginSucess(user.json().data[0]);
                                    }
                                    else {
                                        loginError(user.json().data);
                                        return false;
                                    }
                                }).catch(function (err) {
                                    loginError('Ocorreu um erro ao processar o seu pedido. Por favor tente novamente.');
                                    return false;
                                });
                            }
                            else {
                                // invalid login
                            }
                        }
                    }
                ]
            });
            alert.present();
        }
        function loginSucess(user) {
            var profile = {
                "id": user.id,
                "nome": user.nome,
                "usuario": user.usuario,
                "email": user.email,
                "tipo_usuario": user.tipo_usuario_nome
            };
            auth.setStorageVariable("id_token", user.token);
            auth.setStorageVariable("profile", profile);
            events.publish("shareObject", profile);
            navCtrl.setRoot("DashboardPage");
        }
        function loginError(err) {
            var alert = alertCtrl.create({
                title: 'Atenção!',
                subTitle: err,
                buttons: ['Ok']
            });
            alert.present();
        }
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false, 'side-menu');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true, 'side-menu');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\login\login.html"*/'<login-layout-1\n  [data]="params.data"\n  [events]="params.events">\n</login-layout-1>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map