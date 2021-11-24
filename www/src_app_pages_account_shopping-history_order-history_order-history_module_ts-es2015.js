(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_account_shopping-history_order-history_order-history_module_ts"],{

/***/ 82134:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/order-history/order-history-routing.module.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageRoutingModule": function() { return /* binding */ OrderHistoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history.page */ 67161);




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPage
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ 2328:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/order-history/order-history.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageModule": function() { return /* binding */ OrderHistoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history-routing.module */ 82134);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page */ 67161);







let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPageRoutingModule
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryPage]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ 67161:
/*!************************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/order-history/order-history.page.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPage": function() { return /* binding */ OrderHistoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-history.page.html */ 28912);
/* harmony import */ var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page.scss */ 99665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order/order.service */ 6028);







let OrderHistoryPage = class OrderHistoryPage {
    constructor(route, orderService, loadingController) {
        this.route = route;
        this.orderService = orderService;
        this.loadingController = loadingController;
        this.order = { orderId: 0, total: '0', createdAt: '', updatedAt: '', items: JSON };
        this.loadError = false;
    }
    ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.presentLoading();
        this.getOrderHistory();
    }
    getOrderHistory() {
        this.orderService.getOrderById(this.id).then((order) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.order = order[0];
            console.log(order);
            this.loading.then(message => message.dismiss('loaded', 'ok'));
        })).catch(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () { return this.loading.then(message => message.dismiss('not loaded', 'api timeout')); }));
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                backdropDismiss: false
            });
            this.loading.then((message) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                message.present();
                const { data, role } = yield message.onDidDismiss();
                if (role == undefined || role == 'api timeout') {
                    this.loadError = true;
                }
            }));
        });
    }
};
OrderHistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
OrderHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-order-history',
        template: _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderHistoryPage);



/***/ }),

/***/ 99665:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/order-history/order-history.page.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-top: solid 3px #010;\n  border-bottom: 3px solid #010;\n  margin: 5px;\n}\n\nimg {\n  padding: 5px;\n  margin: 10px;\n  float: left;\n  width: 150px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 50%;\n  border-radius: 10px;\n  margin-top: 2.5em;\n}\n\n.background {\n  background-color: teal;\n  color: white;\n  direction: rtl;\n}\n\n.derecha {\n  direction: rtl;\n}\n\n.small {\n  font-size: small;\n}\n\n.smaller {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNBLFlBQUE7RUFBYyxZQUFBO0VBQWMsV0FBQTtFQUFhLFlBQUE7RUFDekMsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlBOztBQURBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURBO0VBQ0EsY0FBQTtBQUlBOztBQURBO0VBQ0EsZ0JBQUE7QUFJQTs7QUFGQTtFQUNBLGtCQUFBO0FBS0EiLCJmaWxlIjoib3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSAge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4ICMwMTA7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAxMDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5pbWcgeyAgIFxyXG5wYWRkaW5nOiA1cHg7IG1hcmdpbjogMTBweDsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiAxNTBweDtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbmhlaWdodDogNTAlO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5tYXJnaW4tdG9wOiAyLjVlbTtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpcmVjdGlvbjogcnRsXHJcbiAgfVxyXG5cclxuLmRlcmVjaGF7XHJcbmRpcmVjdGlvbjogcnRsXHJcbn1cclxuXHJcbi5zbWFsbHtcclxuZm9udC1zaXplOiBzbWFsbFxyXG59XHJcbi5zbWFsbGVye1xyXG5mb250LXNpemU6IHgtc21hbGxcclxufSJdfQ== */");

/***/ }),

/***/ 28912:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/shopping-history/order-history/order-history.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Order History with ID: {{order.orderId}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div *ngIf=\"order.orderId !== 0\">\r\n    <ion-grid>\r\n      <ion-row >\r\n        <ion-row size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let item of order.items\">\r\n          <img src=\"https://i.picsum.photos/id/870/200/300.jpg?hmac=JX9iOiKD1A168ozbMTARKt6OKYtgsGx9GaBC8tX7oBg\"/>\r\n          <ion-grid >\r\n            <ion-col>          \r\n                  <h3 routerLink=\"/products/{{item.productId}}\">\r\n                    {{item.name}}\r\n                  </h3>\r\n                    <p class=\"small\">Categoría: {{item.category.name}}</p>\r\n                    <p class=\"small\">Precio unitario: {{item.unitPrice}} €</p>\r\n                    <p class=\"small\">Precio total: item.totalPrice €</p>\r\n           </ion-col>\r\n          </ion-grid>\r\n        </ion-row>\r\n      </ion-row>\r\n    </ion-grid>\r\n     \r\n  </div>\r\n        <ion-row>\r\n         <ion-col>  \r\n            <h1 class=\"background\">Importe total: {{order.total}}€</h1>         \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    \r\n\r\n  \r\n      <ion-row class=\"derecha\" *ngFor=\"let item of order.items\">\r\n        <ion-col>\r\n          <p class=\"smaller\">Orden creada a fecha de: {{order.createdAt}}</p>\r\n          <p class=\"smaller\">Fecha de última modificación: {{order.updatedAt}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n       \r\n      \r\n    <div *ngIf=\"loadError\" class=\"error\">Error fetching data from api service. Check your internet connection or try again later.</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_shopping-history_order-history_order-history_module_ts-es2015.js.map