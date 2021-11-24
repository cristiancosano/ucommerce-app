(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 41651:
/*!************************************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JWT_OPTIONS": function() { return /* binding */ JWT_OPTIONS; },
/* harmony export */   "JwtHelperService": function() { return /* binding */ JwtHelperService; },
/* harmony export */   "JwtInterceptor": function() { return /* binding */ JwtInterceptor; },
/* harmony export */   "JwtModule": function() { return /* binding */ JwtModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 16513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58538);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 31887);







const JWT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('JWT_OPTIONS');

// tslint:disable:no-bitwise
class JwtHelperService {
    constructor(config = null) {
        this.tokenGetter = (config && config.tokenGetter) || function () { };
    }
    urlBase64Decode(str) {
        let output = str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += "==";
                break;
            }
            case 3: {
                output += "=";
                break;
            }
            default: {
                throw new Error("Illegal base64url string!");
            }
        }
        return this.b64DecodeUnicode(output);
    }
    // credits for decoder goes to https://github.com/atk
    b64decode(str) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        str = String(str).replace(/=+$/, "");
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        let bc = 0, bs, buffer, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), (c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(""));
    }
    decodeToken(token = this.tokenGetter()) {
        if (!token || token === "") {
            return null;
        }
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error("Cannot decode the token.");
        }
        return JSON.parse(decoded);
    }
    getTokenExpirationDate(token = this.tokenGetter()) {
        let decoded;
        decoded = this.decodeToken(token);
        if (!decoded || !decoded.hasOwnProperty("exp")) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    isTokenExpired(token = this.tokenGetter(), offsetSeconds) {
        if (!token || token === "") {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
    getAuthScheme(authScheme, request) {
        if (typeof authScheme === "function") {
            return authScheme(request);
        }
        return authScheme;
    }
}
JwtHelperService.ɵfac = function JwtHelperService_Factory(t) { return new (t || JwtHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JWT_OPTIONS)); };
JwtHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtHelperService, factory: JwtHelperService.ɵfac });
JwtHelperService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [JWT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [JWT_OPTIONS]
            }] }]; }, null); })();

class JwtInterceptor {
    constructor(config, jwtHelper, document) {
        this.jwtHelper = jwtHelper;
        this.document = document;
        this.standardPorts = ["80", "443"];
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || "Authorization";
        this.authScheme =
            config.authScheme || config.authScheme === ""
                ? config.authScheme
                : "Bearer ";
        this.allowedDomains = config.allowedDomains || [];
        this.disallowedRoutes = config.disallowedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    isAllowedDomain(request) {
        const requestUrl = new URL(request.url, this.document.location.origin);
        // If the host equals the current window origin,
        // the domain is allowed by default
        if (requestUrl.host === this.document.location.host) {
            return true;
        }
        // If not the current domain, check the allowed list
        const hostName = `${requestUrl.hostname}${requestUrl.port && !this.standardPorts.includes(requestUrl.port)
            ? ":" + requestUrl.port
            : ""}`;
        return (this.allowedDomains.findIndex((domain) => typeof domain === "string"
            ? domain === hostName
            : domain instanceof RegExp
                ? domain.test(hostName)
                : false) > -1);
    }
    isDisallowedRoute(request) {
        const requestedUrl = new URL(request.url, this.document.location.origin);
        return (this.disallowedRoutes.findIndex((route) => {
            if (typeof route === "string") {
                const parsedRoute = new URL(route, this.document.location.origin);
                return (parsedRoute.hostname === requestedUrl.hostname &&
                    parsedRoute.pathname === requestedUrl.pathname);
            }
            if (route instanceof RegExp) {
                return route.test(request.url);
            }
            return false;
        }) > -1);
    }
    handleInterception(token, request, next) {
        const authScheme = this.jwtHelper.getAuthScheme(this.authScheme, request);
        let tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error("Could not get token from tokenGetter function.");
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token) {
            request = request.clone({
                setHeaders: {
                    [this.headerName]: `${authScheme}${token}`,
                },
            });
        }
        return next.handle(request);
    }
    intercept(request, next) {
        if (!this.isAllowedDomain(request) || this.isDisallowedRoute(request)) {
            return next.handle(request);
        }
        const token = this.tokenGetter(request);
        if (token instanceof Promise) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((asyncToken) => {
                return this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JWT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
JwtInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [JWT_OPTIONS,] }] },
    { type: JwtHelperService },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [JWT_OPTIONS]
            }] }, { type: JwtHelperService }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, null); })();

class JwtModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.");
        }
    }
    static forRoot(options) {
        return {
            ngModule: JwtModule,
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true,
                },
                options.jwtOptionsProvider || {
                    provide: JWT_OPTIONS,
                    useValue: options.config,
                },
                JwtHelperService,
            ],
        };
    }
}
JwtModule.ɵfac = function JwtModule_Factory(t) { return new (t || JwtModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JwtModule, 12)); };
JwtModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JwtModule });
JwtModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
JwtModule.ctorParameters = () => [
    { type: JwtModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
    }], function () { return [{ type: JwtModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }]; }, null); })();

/*
 * Public API Surface of angular-jwt
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=auth0-angular-jwt.js.map

/***/ }),

/***/ 33626:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 41651);





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost + '/users';
        this.token = undefined;
        this.decodedToken = undefined;
    }
    getById() {
        this.refreshToken();
    }
    getByEmail() {
        this.refreshToken();
    }
    create() {
    }
    update(name, email, password, phone) {
        return new Promise(resolve => {
            const token = this.getToken();
            const decodedToken = this.getDecodedToken();
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().appendAll({ password, email, phone, name, token });
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            console.log(params, headers);
            this.http.put(this.host + '/' + decodedToken.customerId, params, { headers }).subscribe(data => resolve(data), error => console.log(error));
        });
    }
    delete() {
    }
    login(email, password) {
        return new Promise(resolve => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().appendAll({ password, email });
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            console.log(params, headers);
            this.http.post(this.host + '/auth', params, { headers }).subscribe((data) => {
                this.token = data.token;
                resolve(data.token);
            }, error => console.log(error));
        });
    }
    logout() {
        this.token = undefined;
        this.decodedToken = undefined;
        localStorage.removeItem('token');
    }
    isAuth() {
        this.refreshToken();
        return this.token !== undefined && this.token !== null;
    }
    getToken() {
        return JSON.parse(localStorage.getItem('token'));
    }
    refreshToken() {
        this.token = JSON.parse(localStorage.getItem('token'));
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
        this.decodedToken = helper.decodeToken(this.token);
    }
    getDecodedToken() {
        this.refreshToken();
        return this.decodedToken;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 77991:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 43962);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'products',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_products_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/products/home.module */ 61068)).then(m => m.HomePageModule)
            },
            {
                path: 'categories',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categories_categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/categories/categories.module */ 73043)).then(m => m.CategoriesPageModule)
            },
            {
                path: 'cart',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/cart/cart.module */ 72088)).then(m => m.CartPageModule)
            },
            {
                path: 'search',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/search/search.module */ 16785)).then(m => m.SearchPageModule)
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/account/account.module */ 87674)).then(m => m.AccountPageModule)
            },
            {
                path: '',
                redirectTo: '/products',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 86432:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 77991);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 43962);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 43962:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 33626);





let TabsPage = class TabsPage {
    constructor(userService) {
        this.userService = userService;
        this.isAuth = () => this.userService.isAuth();
        this.numCartItems = 0;
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"products\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"apps-outline\"></ion-icon>\n      <ion-label>Categories</ion-label>\n    </ion-tab-button>\n\n    \n    <ion-tab-button tab=\"cart\" *ngIf=\"isAuth()\">\n      <ion-badge color=\"danger\" *ngIf=\"numCartItems > 0\">{{numCartItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Cart</ion-label>\n    </ion-tab-button>\n\n    \n   \n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map