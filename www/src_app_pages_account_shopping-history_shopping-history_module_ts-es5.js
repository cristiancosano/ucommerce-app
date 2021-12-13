(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_account_shopping-history_shopping-history_module_ts"], {
    /***/
    81309:
    /*!***************************************************************!*\
      !*** ./src/app/components/order-card/order-card.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderCardComponent": function OrderCardComponent() {
          return (
            /* binding */
            _OrderCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_order_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./order-card.component.html */
      69484);
      /* harmony import */


      var _order_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-card.component.scss */
      77892);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _OrderCardComponent = /*#__PURE__*/function () {
        function OrderCardComponent() {
          _classCallCheck(this, OrderCardComponent);
        }

        _createClass(OrderCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderCardComponent;
      }();

      _OrderCardComponent.ctorParameters = function () {
        return [];
      };

      _OrderCardComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        createdAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        updatedAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _OrderCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-order-card',
        template: _raw_loader_order_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OrderCardComponent);
      /***/
    },

    /***/
    89125:
    /*!************************************************************!*\
      !*** ./src/app/components/order-card/order-card.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderCardComponentModule": function OrderCardComponentModule() {
          return (
            /* binding */
            _OrderCardComponentModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _order_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-card.component */
      81309);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _OrderCardComponentModule = function OrderCardComponentModule() {
        _classCallCheck(this, OrderCardComponentModule);
      };

      _OrderCardComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_order_card_component__WEBPACK_IMPORTED_MODULE_0__.OrderCardComponent],
        exports: [_order_card_component__WEBPACK_IMPORTED_MODULE_0__.OrderCardComponent],
        providers: []
      })], _OrderCardComponentModule);
      /***/
    },

    /***/
    61989:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/account/shopping-history/shopping-history-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShoppingHistoryPageRoutingModule": function ShoppingHistoryPageRoutingModule() {
          return (
            /* binding */
            _ShoppingHistoryPageRoutingModule
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


      var _shopping_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shopping-history.page */
      21048);

      var routes = [{
        path: '',
        component: _shopping_history_page__WEBPACK_IMPORTED_MODULE_0__.ShoppingHistoryPage
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_account_shopping-history_order-history_order-history_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./order-history/order-history.module */
          2328)).then(function (m) {
            return m.OrderHistoryPageModule;
          });
        }
      }];

      var _ShoppingHistoryPageRoutingModule = function ShoppingHistoryPageRoutingModule() {
        _classCallCheck(this, ShoppingHistoryPageRoutingModule);
      };

      _ShoppingHistoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ShoppingHistoryPageRoutingModule);
      /***/
    },

    /***/
    23970:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/account/shopping-history/shopping-history.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShoppingHistoryPageModule": function ShoppingHistoryPageModule() {
          return (
            /* binding */
            _ShoppingHistoryPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _shopping_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shopping-history-routing.module */
      61989);
      /* harmony import */


      var _shopping_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shopping-history.page */
      21048);
      /* harmony import */


      var src_app_components_order_card_order_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/order-card/order-card.module */
      89125);

      var _ShoppingHistoryPageModule = function ShoppingHistoryPageModule() {
        _classCallCheck(this, ShoppingHistoryPageModule);
      };

      _ShoppingHistoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _shopping_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShoppingHistoryPageRoutingModule, src_app_components_order_card_order_card_module__WEBPACK_IMPORTED_MODULE_2__.OrderCardComponentModule],
        declarations: [_shopping_history_page__WEBPACK_IMPORTED_MODULE_1__.ShoppingHistoryPage]
      })], _ShoppingHistoryPageModule);
      /***/
    },

    /***/
    21048:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/account/shopping-history/shopping-history.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShoppingHistoryPage": function ShoppingHistoryPage() {
          return (
            /* binding */
            _ShoppingHistoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_shopping_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./shopping-history.page.html */
      83129);
      /* harmony import */


      var _shopping_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shopping-history.page.scss */
      42561);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/order/order.service */
      6028);

      var _ShoppingHistoryPage = /*#__PURE__*/function () {
        function ShoppingHistoryPage(orderService) {
          var _this = this;

          _classCallCheck(this, ShoppingHistoryPage);

          this.orderService = orderService;

          this.getOrders = function () {
            console.log("hola");

            _this.orderService.getOrders().then(function (data) {
              _this.orders = data;
              console.log(data);
            });
          };
        }

        _createClass(ShoppingHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOrders();
          }
        }]);

        return ShoppingHistoryPage;
      }();

      _ShoppingHistoryPage.ctorParameters = function () {
        return [{
          type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService
        }];
      };

      _ShoppingHistoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-shopping-history',
        template: _raw_loader_shopping_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shopping_history_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ShoppingHistoryPage);
      /***/
    },

    /***/
    6028:
    /*!*************************************************!*\
      !*** ./src/app/services/order/order.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderService": function OrderService() {
          return (
            /* binding */
            _OrderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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


      var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../user/user.service */
      33626);

      var _OrderService = /*#__PURE__*/function () {
        function OrderService(http, userService) {
          _classCallCheck(this, OrderService);

          this.http = http;
          this.userService = userService;
          this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost + '/users';
          this.host2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost + '/orders';
        }

        _createClass(OrderService, [{
          key: "getOrders",
          value: function getOrders() {
            var _this2 = this;

            return new Promise(function (resolve) {
              var token = _this2.userService.getToken();

              var decodedToken = _this2.userService.getDecodedToken();

              var customerId = decodedToken.customerId;
              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().appendAll({
                token: token
              });
              console.log(token);
              console.log(_this2.host);
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

              _this2.http.get(_this2.host + "/".concat(customerId, "/shopping-history"), {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "getOrderById",
          value: function getOrderById(orderId) {
            var _this3 = this;

            return new Promise(function (resolve) {
              var token = _this3.userService.getToken();

              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().appendAll({
                token: token
              });
              console.log(token);
              console.log(_this3.host);
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

              _this3.http.get(_this3.host2 + "/".concat(orderId), {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }]);

        return OrderService;
      }();

      _OrderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService
        }];
      };

      _OrderService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _OrderService);
      /***/
    },

    /***/
    77892:
    /*!*****************************************************************!*\
      !*** ./src/app/components/order-card/order-card.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    42561:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/account/shopping-history/shopping-history.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    69484:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-card/order-card.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item  [routerLink]=\"['/account/shopping-history', id]\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h3>Pedido nº{{id}}</h3>\r\n    <p>Comprado el: {{createdAt | date:'dd/MM/yyyy - hh:mm'}}</p>\r\n    <div *ngIf=\"createdAt != updatedAt\">\r\n      <p>Modificado el: {{updatedAt | date:'dd/MM/yyyy - hh:mm'}}</p>\r\n    </div>\r\n    <p><strong>Total: </strong> EUR {{total}}</p>\r\n  </ion-label>\r\n</ion-item>";
      /***/
    },

    /***/
    83129:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/shopping-history/shopping-history.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Shopping History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" *ngFor=\"let order of orders\">\r\n        <app-order-card id=\"{{order.orderId}}\" total=\"{{order.total}}\" createdAt=\"{{order.createdAt}}\" updatedAt=\"{{order.updatedAt}}\"></app-order-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_account_shopping-history_shopping-history_module_ts-es5.js.map