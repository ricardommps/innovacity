webpackJsonp([16],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/login/layout-1/login-layout-1.module": [
		715,
		15
	],
	"../components/login/layout-2/login-layout-2.module": [
		716,
		14
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		718,
		13
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		717,
		12
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		719,
		11
	],
	"../pages/comentarios-ocorrencia/comentarios-ocorrencia.module": [
		721,
		7
	],
	"../pages/dashboard/dashboard.module": [
		720,
		0
	],
	"../pages/detail-service/detail-service.module": [
		724,
		1
	],
	"../pages/finalized/finalized.module": [
		723,
		3
	],
	"../pages/groupViolations/groupViolations.module": [
		725,
		9
	],
	"../pages/home/home.module": [
		722,
		10
	],
	"../pages/intimate/intimate.module": [
		727,
		5
	],
	"../pages/login/login.module": [
		729,
		6
	],
	"../pages/notification/notification.module": [
		726,
		4
	],
	"../pages/violation/violation.module": [
		728,
		8
	],
	"../pages/waiting/waiting.module": [
		730,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_avatar_text_avatar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rede_more_read_more_directive__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__text_avatar_text_avatar__["a" /* TextAvatarDirective */], __WEBPACK_IMPORTED_MODULE_3__rede_more_read_more_directive__["a" /* ReadMoreDirective */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__text_avatar_text_avatar__["a" /* TextAvatarDirective */], __WEBPACK_IMPORTED_MODULE_3__rede_more_read_more_directive__["a" /* ReadMoreDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    IS_FIREBASE_ENABLED: false,
    SHOW_START_WIZARD: false,
    SUBSCRIBE: false,
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyCZFavRD1RFht43EqIv7VlBtpxe1wRwXw8",
        authDomain: "innovacity-7d640.firebaseapp.com",
        databaseURL: "https://innovacity-7d640.firebaseio.com",
        projectId: "innovacity-7d640",
        storageBucket: "innovacity-7d640.appspot.com",
        messagingSenderId: "1064910800806"
    },
    MAP_KEY: {
        apiKey: 'AIzaSyBt2zeAwjWWIhW9SLG5RxPH0dvJ6Ggym08'
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(395);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpInterceptorFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_interceptor__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function httpInterceptorFactory(xhrBackend, requestOptions, inj) {
    return new __WEBPACK_IMPORTED_MODULE_10__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, inj);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comentarios-ocorrencia/comentarios-ocorrencia.module#ComentariosOcorrenciaPageModule', name: 'ComentariosOcorrenciaPage', segment: 'comentarios-ocorrencia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/finalized/finalized.module#FinalizedPageModule', name: 'FinalizedPage', segment: 'finalized', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail-service/detail-service.module#DetailServicePageModule', name: 'DetailServicePage', segment: 'detail-service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/groupViolations/groupViolations.module#GroupViolationsPageModule', name: 'GroupViolationsPage', segment: 'groupViolations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intimate/intimate.module#IntimatePageModule', name: 'IntimatePage', segment: 'intimate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/violation/violation.module#ViolationPageModule', name: 'ViolationPage', segment: 'violation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/waiting/waiting.module#WaitingPageModule', name: 'WaitingPage', segment: 'waiting', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["b" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* Geocoder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            {
                provide: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]],
                useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */]
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
                useFactory: httpInterceptorFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAvatarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_generator__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextAvatarDirective = (function () {
    function TextAvatarDirective(element, colorGenerator) {
        this.element = element;
        this.colorGenerator = colorGenerator;
    }
    TextAvatarDirective.prototype.ngOnChanges = function (changes) {
        var text = changes['text'] ? changes['text'].currentValue : null;
        var color = changes['color'] ? changes['color'].currentValue : null;
        this.element.nativeElement.setAttribute("value", this.extractFirstCharacter(text));
        this.element.nativeElement.style.backgroundColor = this.backgroundColorHexString(color, text);
    };
    TextAvatarDirective.prototype.extractFirstCharacter = function (text) {
        if (text) {
            var res = text.split(" ");
            var textStr = "";
            if (res.length <= 1) {
                textStr = res[0] ? res[0].charAt(0).toLocaleUpperCase() : '';
            }
            else {
                textStr = (res[0] ? res[0].charAt(0).toLocaleUpperCase() : '') + (res[1] ? res[1].charAt(0).toLocaleUpperCase() : "");
            }
            //var textStr = text.charAt(0).toLocaleUpperCase() + text.charAt(1).toLocaleUpperCase()
            return textStr || '';
        }
        else {
            return '';
        }
    };
    TextAvatarDirective.prototype.backgroundColorHexString = function (color, text) {
        return color || this.colorGenerator.getColor(this.extractFirstCharacter(text));
    };
    return TextAvatarDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TextAvatarDirective.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TextAvatarDirective.prototype, "color", void 0);
TextAvatarDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: 'text-avatar',
        providers: [__WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]])
], TextAvatarDirective);

//# sourceMappingURL=text-avatar.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorGenerator; });
var ColorGenerator = (function () {
    function ColorGenerator() {
        this.COLORS = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6',
            '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7',
            '#ffb74d', '#a1887f', '#90a4ae'];
    }
    ColorGenerator.prototype.getColor = function (str) {
        return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
    };
    ColorGenerator.prototype.toNumber = function (str) {
        var h = 0;
        for (var i = 0; i < str.length; i++) {
            h = 31 * h + str.charCodeAt(i);
            h |= 0; // Convert to 32bit integer
        }
        return h;
    };
    ;
    return ColorGenerator;
}());

//# sourceMappingURL=color-generator.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMoreDirective; });
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

var ReadMoreDirective = (function () {
    function ReadMoreDirective(el) {
        this.el = el;
        this.hideToggle = true;
        this.isCollapsed = true;
    }
    /**
     * @inheritDoc
     */
    ReadMoreDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.text = this.elementChange.innerHTML;
        this.toggleView();
        if (!this.hideToggle) {
            this.el.nativeElement.classList.remove('hidden');
        }
        else {
            this.el.nativeElement.classList.add('hidden');
        }
        this.el.nativeElement.addEventListener('click', function (event) {
            event.preventDefault();
            _this.toggleView();
        });
    };
    /**
     * @inheritDoc
     */
    ReadMoreDirective.prototype.ngOnChanges = function () {
        if (this.text) {
            this.toggleView();
        }
    };
    /**
     * Toogle view - full text or not
     */
    ReadMoreDirective.prototype.toggleView = function () {
        this.determineView();
        this.isCollapsed = !this.isCollapsed;
        if (this.isCollapsed) {
            this.el.nativeElement.querySelector('.more').style.display = "none";
            this.el.nativeElement.querySelector('.less').style.display = "inherit";
        }
        else {
            this.el.nativeElement.querySelector('.more').style.display = "inherit";
            this.el.nativeElement.querySelector('.less').style.display = "none";
        }
    };
    /**
     * Determine view
     */
    ReadMoreDirective.prototype.determineView = function () {
        var _elementChange = document.getElementById(this.elementChange.id);
        var strText = this.text.trim();
        if (strText.length <= this.maxLength) {
            this.currentText = strText;
            _elementChange.innerHTML = this.currentText;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed === true) {
            this.currentText = strText.substring(0, this.maxLength);
            _elementChange.innerHTML = this.currentText;
        }
        else if (this.isCollapsed === false) {
            this.currentText = strText;
            _elementChange.innerHTML = this.currentText;
        }
    };
    return ReadMoreDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('readMore-length'),
    __metadata("design:type", Number)
], ReadMoreDirective.prototype, "maxLength", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('readMore-element'),
    __metadata("design:type", HTMLElement)
], ReadMoreDirective.prototype, "elementChange", void 0);
ReadMoreDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[readMore]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], ReadMoreDirective);

//# sourceMappingURL=read-more.directive.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_settings__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, menu, menuService, modalCtrl, auth, events, app) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.events = events;
        this.app = app;
        this.rootPage = "LoginPage";
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
            _this.params.image = "assets/images/avatar/1.jpg";
        });
        if (__WEBPACK_IMPORTED_MODULE_5__services_app_settings__["a" /* AppSettings */].SHOW_START_WIZARD) {
            this.presentProfileModal();
        }
        events.subscribe('shareObject', function (user) {
            _this.params.color = '#ccc';
            _this.params.user = user;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* StatusBar */].styleDefault();
            if (_this.auth.requireAuth()) {
                _this.app.getActiveNav().setRoot("DashboardPage");
                _this.params.color = '#4FC3F7';
                _this.params.user = _this.auth.getStorageVariable('profile');
            }
            else {
                _this.params.user = null;
                _this.app.getActiveNav().setRoot("LoginPage");
            }
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Splashscreen */].hide();
            /* (<any>window).handleOpenURL = (url) => {
               Auth0Cordova.onRedirectUri(url);
             };*/
            // localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == 'Sair') {
            this.auth.logout();
        }
        else {
            this.menu.open();
            this.nav.setRoot(page.theme);
        }
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\app\app.html"*/'<!---Settings Main Header-->\n<ion-split-pane [when]=false>\n    <!-- Menu Main Top -->\n    <ion-menu [content]="content" *ngIf="params.user != null" id="side-menu">\n        <ion-header class="headerMenu">\n            <div header-background-image padding>\n              <div>\n                <text-avatar [text]="params.user.nome" [color]="params.color" item-left></text-avatar>\n                <p class="nameMenu">Olá {{params.user ? params.user.nome : ""}}</p>\n              </div>\n            </div>\n        </ion-header>\n        <!-- Menu Main List -->\n        <ion-content class="contentMenu">\n            <ion-list no-margin>\n                <button menuClose ion-item item-title main-menu no-lines *ngFor="let p of pages"\n                        (click)="openPage(p)">\n                    <ion-icon icon-small item-left>\n                      <i class="icon {{p.icon}}" [ngStyle]="{\'color\': p.colorIcon }"></i>\n                    </ion-icon>\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"C:\Users\ricar\Documents\softplan\innovaCity\mobile\new\innovacity\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = (function () {
    function MenuService() {
        var _this = this;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "Atendimentos", "theme": "DashboardPage", "icon": "icon-alarm", colorIcon: "#fe5a5a", "listView": true, "component": "", "singlePage": true },
                { "title": "Aguardando Prazo", "theme": "WaitingPage", "icon": "icon-alarm", colorIcon: "#1097ff", "listView": true, "component": "", "singlePage": true },
                { "title": "Finalizados", "theme": "FinalizedPage", "icon": "icon-alarm", colorIcon: "#65c55a", "listView": true, "component": "", "singlePage": true },
                { "title": "Sair", "icon": "icon-arrow-left" }
            ];
        };
        this.getDataForTheme = function () {
            return {
                "background": "../assets/images/background/14.jpg",
                "image": "../assets/images/logo/1.png",
                "title": "Ionic 3 theme iOS 11 style",
                "description": "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* SpinnerDialog */].show(null, "Loading");
        /*if (AppSettings.IS_FIREBASE_ENABLED) {
          return new Observable(observer => {
            this.af
              .object('menu')
              .valueChanges()
              .subscribe(snapshot => {
                SpinnerDialog.hide();
                observer.next(snapshot);
                observer.complete();
              }, err => {
                SpinnerDialog.hide();
                observer.error([]);
                observer.complete();
              });
          });
        } else {
          return new Observable(observer => {
            SpinnerDialog.hide();
            observer.next(this.getDataForTheme());
            observer.complete();
          });
        }*/
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* SpinnerDialog */].hide();
            observer.next(_this.getDataForTheme());
            observer.complete();
        });
    };
    return MenuService;
}());
MenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MenuService);

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(81);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var asyncLocalStorage = {
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return JSON.parse(window.localStorage.getItem(key));
        });
    }
};
var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(connectionBackend, requestOptions, inj) {
        var _this = _super.call(this, connectionBackend, requestOptions) || this;
        _this.inj = inj;
        return _this;
    }
    InterceptedHttp.prototype.get = function (url, options) {
        var _this = this;
        url = this.updateUrl(url);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.getRequestOptionArgs(options)).mergeMap(function (options) {
            // return super.get(url,options)
            return _this.intercept(_super.prototype.get.call(_this, url, options));
        });
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        var _this = this;
        url = this.updateUrl(url);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.getRequestOptionArgs(options)).mergeMap(function (options) {
            // return super.post(url, body,options)
            return _this.intercept(_super.prototype.post.call(_this, url, body, options));
        });
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        var _this = this;
        url = this.updateUrl(url);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.getRequestOptionArgs(options)).mergeMap(function (options) {
            //return super.put(url, body,options)
            return _this.intercept(_super.prototype.put.call(_this, url, body, options));
        });
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        var _this = this;
        url = this.updateUrl(url);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.getRequestOptionArgs(options)).mergeMap(function (options) {
            // return super.delete(url,options)
            return _this.intercept(_super.prototype.delete.call(_this, url, options));
        });
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        return asyncLocalStorage.getItem('id_token').then(function (token) {
            if (options == null) {
                options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
            }
            if (options.headers == null) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            }
            if (token !== null) {
                options.headers.append('Authorization', token);
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        }).catch(function (err) {
            return options;
        });
    };
    InterceptedHttp.prototype.updateUrl = function (req) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].origin + req;
    };
    InterceptedHttp.prototype.isUnauthorized = function (status) {
        return status === 0 || status === 401 || status === 403;
    };
    InterceptedHttp.prototype.intercept = function (observable) {
        var _this = this;
        return observable.catch(function (err, source) {
            if (_this.isUnauthorized(err.status)) {
                var auth = _this.inj.get(__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]);
                auth.logout();
                if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.json().message || 'backend server error');
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err);
            }
        });
    };
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));
InterceptedHttp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
], InterceptedHttp);

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    //origin: 'https://innovacity.herokuapp.com/api/v1'
    origin: 'http://api.innovacity.com.br/api/v1'
    //origin: 'http://localhost:3000/api/v1'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, app) {
        this.http = http;
        this.app = app;
    }
    AuthService.prototype.getStorageVariable = function (name) {
        if (!JSON.parse(window.localStorage.getItem(name))) {
            this.logout();
        }
        return JSON.parse(window.localStorage.getItem(name));
    };
    AuthService.prototype.getuserId = function () {
        var user = JSON.parse(window.localStorage.getItem('profile'));
        if (!user) {
            this.logout();
        }
        return user.id;
    };
    AuthService.prototype.setStorageVariable = function (name, data) {
        window.localStorage.setItem(name, JSON.stringify(data));
    };
    AuthService.prototype.isAuthenticated = function () {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    };
    AuthService.prototype.login = function (user) {
        return this.http.post('/login', user).toPromise();
        //this.nav.setRoot("DashboardPage");
    };
    AuthService.prototype.updatePassword = function (user) {
        return this.http.post('/updatePassword', user).toPromise();
    };
    AuthService.prototype.newPassword = function (userInfo) {
        return this.http.post('/newPassword', userInfo).toPromise();
    };
    AuthService.prototype.requireAuth = function () {
        return this.isLoggedIn();
    };
    AuthService.prototype.isLoggedIn = function () {
        var idToken = this.getStorageVariable('id_token');
        var profile = this.getStorageVariable('profile');
        if (!idToken && !profile) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem('profile');
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('expires_at');
        this.app.getActiveNav().setRoot("LoginPage");
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map