(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_tabs_tabs_module_ts"], {
    /***/
    41651:
    /*!************************************************************************************!*\
      !*** ./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JWT_OPTIONS": function JWT_OPTIONS() {
          return (
            /* binding */
            _JWT_OPTIONS
          );
        },

        /* harmony export */
        "JwtHelperService": function JwtHelperService() {
          return (
            /* binding */
            _JwtHelperService
          );
        },

        /* harmony export */
        "JwtInterceptor": function JwtInterceptor() {
          return (
            /* binding */
            _JwtInterceptor
          );
        },

        /* harmony export */
        "JwtModule": function JwtModule() {
          return (
            /* binding */
            _JwtModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      16513);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      58538);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      31887);

      var _JWT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('JWT_OPTIONS'); // tslint:disable:no-bitwise


      var _JwtHelperService = /*#__PURE__*/function () {
        function _JwtHelperService() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _classCallCheck(this, _JwtHelperService);

          this.tokenGetter = config && config.tokenGetter || function () {};
        }

        _createClass(_JwtHelperService, [{
          key: "urlBase64Decode",
          value: function urlBase64Decode(str) {
            var output = str.replace(/-/g, "+").replace(/_/g, "/");

            switch (output.length % 4) {
              case 0:
                {
                  break;
                }

              case 2:
                {
                  output += "==";
                  break;
                }

              case 3:
                {
                  output += "=";
                  break;
                }

              default:
                {
                  throw new Error("Illegal base64url string!");
                }
            }

            return this.b64DecodeUnicode(output);
          } // credits for decoder goes to https://github.com/atk

        }, {
          key: "b64decode",
          value: function b64decode(str) {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var output = "";
            str = String(str).replace(/=+$/, "");

            if (str.length % 4 === 1) {
              throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
            }

            for ( // initialize result and counters
            var bc = 0, bs, buffer, idx = 0; // get next character
            buffer = str.charAt(idx++); // character found in table? initialize bit storage and add its ascii value;
            ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
              // try to find character in table (0-63, not found => -1)
              buffer = chars.indexOf(buffer);
            }

            return output;
          }
        }, {
          key: "b64DecodeUnicode",
          value: function b64DecodeUnicode(str) {
            return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(""));
          }
        }, {
          key: "decodeToken",
          value: function decodeToken() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tokenGetter();

            if (!token || token === "") {
              return null;
            }

            var parts = token.split(".");

            if (parts.length !== 3) {
              throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");
            }

            var decoded = this.urlBase64Decode(parts[1]);

            if (!decoded) {
              throw new Error("Cannot decode the token.");
            }

            return JSON.parse(decoded);
          }
        }, {
          key: "getTokenExpirationDate",
          value: function getTokenExpirationDate() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tokenGetter();
            var decoded;
            decoded = this.decodeToken(token);

            if (!decoded || !decoded.hasOwnProperty("exp")) {
              return null;
            }

            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
          }
        }, {
          key: "isTokenExpired",
          value: function isTokenExpired() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tokenGetter();
            var offsetSeconds = arguments.length > 1 ? arguments[1] : undefined;

            if (!token || token === "") {
              return true;
            }

            var date = this.getTokenExpirationDate(token);
            offsetSeconds = offsetSeconds || 0;

            if (date === null) {
              return false;
            }

            return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
          }
        }, {
          key: "getAuthScheme",
          value: function getAuthScheme(authScheme, request) {
            if (typeof authScheme === "function") {
              return authScheme(request);
            }

            return authScheme;
          }
        }]);

        return _JwtHelperService;
      }();

      _JwtHelperService.ɵfac = function JwtHelperService_Factory(t) {
        return new (t || _JwtHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_JWT_OPTIONS));
      };

      _JwtHelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _JwtHelperService,
        factory: _JwtHelperService.ɵfac
      });

      _JwtHelperService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_JWT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_JwtHelperService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_JWT_OPTIONS]
            }]
          }];
        }, null);
      })();

      var _JwtInterceptor = /*#__PURE__*/function () {
        function _JwtInterceptor(config, jwtHelper, document) {
          _classCallCheck(this, _JwtInterceptor);

          this.jwtHelper = jwtHelper;
          this.document = document;
          this.standardPorts = ["80", "443"];
          this.tokenGetter = config.tokenGetter;
          this.headerName = config.headerName || "Authorization";
          this.authScheme = config.authScheme || config.authScheme === "" ? config.authScheme : "Bearer ";
          this.allowedDomains = config.allowedDomains || [];
          this.disallowedRoutes = config.disallowedRoutes || [];
          this.throwNoTokenError = config.throwNoTokenError || false;
          this.skipWhenExpired = config.skipWhenExpired;
        }

        _createClass(_JwtInterceptor, [{
          key: "isAllowedDomain",
          value: function isAllowedDomain(request) {
            var requestUrl = new URL(request.url, this.document.location.origin); // If the host equals the current window origin,
            // the domain is allowed by default

            if (requestUrl.host === this.document.location.host) {
              return true;
            } // If not the current domain, check the allowed list


            var hostName = "".concat(requestUrl.hostname).concat(requestUrl.port && !this.standardPorts.includes(requestUrl.port) ? ":" + requestUrl.port : "");
            return this.allowedDomains.findIndex(function (domain) {
              return typeof domain === "string" ? domain === hostName : domain instanceof RegExp ? domain.test(hostName) : false;
            }) > -1;
          }
        }, {
          key: "isDisallowedRoute",
          value: function isDisallowedRoute(request) {
            var _this = this;

            var requestedUrl = new URL(request.url, this.document.location.origin);
            return this.disallowedRoutes.findIndex(function (route) {
              if (typeof route === "string") {
                var parsedRoute = new URL(route, _this.document.location.origin);
                return parsedRoute.hostname === requestedUrl.hostname && parsedRoute.pathname === requestedUrl.pathname;
              }

              if (route instanceof RegExp) {
                return route.test(request.url);
              }

              return false;
            }) > -1;
          }
        }, {
          key: "handleInterception",
          value: function handleInterception(token, request, next) {
            var authScheme = this.jwtHelper.getAuthScheme(this.authScheme, request);
            var tokenIsExpired = false;

            if (!token && this.throwNoTokenError) {
              throw new Error("Could not get token from tokenGetter function.");
            }

            if (this.skipWhenExpired) {
              tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
            }

            if (token && tokenIsExpired && this.skipWhenExpired) {
              request = request.clone();
            } else if (token) {
              request = request.clone({
                setHeaders: _defineProperty({}, this.headerName, "".concat(authScheme).concat(token))
              });
            }

            return next.handle(request);
          }
        }, {
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            if (!this.isAllowedDomain(request) || this.isDisallowedRoute(request)) {
              return next.handle(request);
            }

            var token = this.tokenGetter(request);

            if (token instanceof Promise) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(token).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(function (asyncToken) {
                return _this2.handleInterception(asyncToken, request, next);
              }));
            } else {
              return this.handleInterception(token, request, next);
            }
          }
        }]);

        return _JwtInterceptor;
      }();

      _JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || _JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_JWT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
      };

      _JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _JwtInterceptor,
        factory: _JwtInterceptor.ɵfac
      });

      _JwtInterceptor.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_JWT_OPTIONS]
          }]
        }, {
          type: _JwtHelperService
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_JWT_OPTIONS]
            }]
          }, {
            type: _JwtHelperService
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }]
          }];
        }, null);
      })();

      var _JwtModule = /*#__PURE__*/function () {
        function _JwtModule(parentModule) {
          _classCallCheck(this, _JwtModule);

          if (parentModule) {
            throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.");
          }
        }

        _createClass(_JwtModule, null, [{
          key: "forRoot",
          value: function forRoot(options) {
            return {
              ngModule: _JwtModule,
              providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
                useClass: _JwtInterceptor,
                multi: true
              }, options.jwtOptionsProvider || {
                provide: _JWT_OPTIONS,
                useValue: options.config
              }, _JwtHelperService]
            };
          }
        }]);

        return _JwtModule;
      }();

      _JwtModule.ɵfac = function JwtModule_Factory(t) {
        return new (t || _JwtModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_JwtModule, 12));
      };

      _JwtModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _JwtModule
      });
      _JwtModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      _JwtModule.ctorParameters = function () {
        return [{
          type: _JwtModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_JwtModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
        }], function () {
          return [{
            type: _JwtModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }];
        }, null);
      })();
      /*
       * Public API Surface of angular-jwt
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=auth0-angular-jwt.js.map

      /***/

    },

    /***/
    33626:
    /*!***********************************************!*\
      !*** ./src/app/services/user/user.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      24766);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      41651);

      var _UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost + '/users';
          this.token = undefined;
          this.decodedToken = undefined;
        }

        _createClass(UserService, [{
          key: "getById",
          value: function getById() {
            this.refreshToken();
          }
        }, {
          key: "getByEmail",
          value: function getByEmail() {
            this.refreshToken();
          }
        }, {
          key: "create",
          value: function create() {}
        }, {
          key: "update",
          value: function update(name, email, password, phone) {
            var _this3 = this;

            return new Promise(function (resolve) {
              var token = _this3.getToken();

              var decodedToken = _this3.getDecodedToken();

              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().appendAll({
                password: password,
                email: email,
                phone: phone,
                name: name,
                token: token
              });
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
              console.log(params, headers);

              _this3.http.put(_this3.host + '/' + decodedToken.customerId, params, {
                headers: headers
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "delete",
          value: function _delete() {}
        }, {
          key: "login",
          value: function login(email, password) {
            var _this4 = this;

            return new Promise(function (resolve) {
              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().appendAll({
                password: password,
                email: email
              });
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
              console.log(params, headers);

              _this4.http.post(_this4.host + '/auth', params, {
                headers: headers
              }).subscribe(function (data) {
                _this4.token = data.token;
                resolve(data.token);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = undefined;
            this.decodedToken = undefined;
            localStorage.removeItem('token');
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            this.refreshToken();
            return this.token !== undefined && this.token !== null;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return JSON.parse(localStorage.getItem('token'));
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            this.token = JSON.parse(localStorage.getItem('token'));
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
            this.decodedToken = helper.decodeToken(this.token);
          }
        }, {
          key: "getDecodedToken",
          value: function getDecodedToken() {
            this.refreshToken();
            return this.decodedToken;
          }
        }]);

        return UserService;
      }();

      _UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _UserService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UserService);
      /***/
    },

    /***/
    77991:
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      43962);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [{
          path: 'products',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_products_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../pages/products/home.module */
            61068)).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'categories',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_categories_categories_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pages/categories/categories.module */
            73043)).then(function (m) {
              return m.CategoriesPageModule;
            });
          }
        }, {
          path: 'cart',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../pages/cart/cart.module */
            72088)).then(function (m) {
              return m.CartPageModule;
            });
          }
        }, {
          path: 'search',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../pages/search/search.module */
            16785)).then(function (m) {
              return m.SearchPageModule;
            });
          }
        }, {
          path: 'account',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pages/account/account.module */
            87674)).then(function (m) {
              return m.AccountPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/products',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      }];

      var _TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    86432:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      77991);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      43962);

      var _TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    43962:
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.page.html */
      97665);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      24427);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      33626);

      var _TabsPage = function TabsPage(userService) {
        var _this5 = this;

        _classCallCheck(this, TabsPage);

        this.userService = userService;

        this.isAuth = function () {
          return _this5.userService.isAuth();
        };

        this.numCartItems = 0;
      };

      _TabsPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }];
      };

      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsPage);
      /***/
    },

    /***/
    24427:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    97665:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"products\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"apps-outline\"></ion-icon>\n      <ion-label>Categories</ion-label>\n    </ion-tab-button>\n\n    \n    <ion-tab-button tab=\"cart\" *ngIf=\"isAuth()\">\n      <ion-badge color=\"danger\" *ngIf=\"numCartItems > 0\">{{numCartItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Cart</ion-label>\n    </ion-tab-button>\n\n    \n   \n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es5.js.map