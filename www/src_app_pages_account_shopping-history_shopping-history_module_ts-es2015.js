(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_account_shopping-history_shopping-history_module_ts"],{

/***/ 81309:
/*!***************************************************************!*\
  !*** ./src/app/components/order-card/order-card.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderCardComponent": function() { return /* binding */ OrderCardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_order_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-card.component.html */ 69484);
/* harmony import */ var _order_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-card.component.scss */ 77892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);




let OrderCardComponent = class OrderCardComponent {
    constructor() { }
    ngOnInit() { }
};
OrderCardComponent.ctorParameters = () => [];
OrderCardComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    createdAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    updatedAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
OrderCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-order-card',
        template: _raw_loader_order_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderCardComponent);



/***/ }),

/***/ 89125:
/*!************************************************************!*\
  !*** ./src/app/components/order-card/order-card.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderCardComponentModule": function() { return /* binding */ OrderCardComponentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _order_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-card.component */ 81309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);







let OrderCardComponentModule = class OrderCardComponentModule {
};
OrderCardComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_order_card_component__WEBPACK_IMPORTED_MODULE_0__.OrderCardComponent],
        exports: [_order_card_component__WEBPACK_IMPORTED_MODULE_0__.OrderCardComponent],
        providers: []
    })
], OrderCardComponentModule);



/***/ }),

/***/ 61989:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/shopping-history-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingHistoryPageRoutingModule": function() { return /* binding */ ShoppingHistoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _shopping_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-history.page */ 21048);




const routes = [
    {
        path: '',
        component: _shopping_history_page__WEBPACK_IMPORTED_MODULE_0__.ShoppingHistoryPage
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_shopping-history_order-history_order-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-history/order-history.module */ 2328)).then(m => m.OrderHistoryPageModule)
    },
];
let ShoppingHistoryPageRoutingModule = class ShoppingHistoryPageRoutingModule {
};
ShoppingHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShoppingHistoryPageRoutingModule);



/***/ }),

/***/ 23970:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/shopping-history.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingHistoryPageModule": function() { return /* binding */ ShoppingHistoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _shopping_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-history-routing.module */ 61989);
/* harmony import */ var _shopping_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-history.page */ 21048);
/* harmony import */ var src_app_components_order_card_order_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/order-card/order-card.module */ 89125);








let ShoppingHistoryPageModule = class ShoppingHistoryPageModule {
};
ShoppingHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shopping_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShoppingHistoryPageRoutingModule,
            src_app_components_order_card_order_card_module__WEBPACK_IMPORTED_MODULE_2__.OrderCardComponentModule
        ],
        declarations: [_shopping_history_page__WEBPACK_IMPORTED_MODULE_1__.ShoppingHistoryPage]
    })
], ShoppingHistoryPageModule);



/***/ }),

/***/ 21048:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/shopping-history.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingHistoryPage": function() { return /* binding */ ShoppingHistoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_shopping_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shopping-history.page.html */ 83129);
/* harmony import */ var _shopping_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-history.page.scss */ 42561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order/order.service */ 6028);





let ShoppingHistoryPage = class ShoppingHistoryPage {
    constructor(orderService) {
        this.orderService = orderService;
        this.getOrders = () => {
            console.log("hola");
            this.orderService.getOrders().then((data) => {
                this.orders = data;
                console.log(data);
            });
        };
    }
    ngOnInit() {
        this.getOrders();
    }
};
ShoppingHistoryPage.ctorParameters = () => [
    { type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService }
];
ShoppingHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-shopping-history',
        template: _raw_loader_shopping_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shopping_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShoppingHistoryPage);



/***/ }),

/***/ 77892:
/*!*****************************************************************!*\
  !*** ./src/app/components/order-card/order-card.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 42561:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/shopping-history/shopping-history.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 69484:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-card/order-card.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item  [routerLink]=\"['/account/shopping-history', id]\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n  </ion-thumbnail>\n  <ion-label>\n    <h3>Pedido n??{{id}}</h3>\n    <p>Comprado el: {{createdAt??|??date:'dd/MM/yyyy - hh:mm'}}</p>\n    <div *ngIf=\"createdAt != updatedAt\">\n      <p>Modificado el: {{updatedAt |??date:'dd/MM/yyyy - hh:mm'}}</p>\n    </div>\n    <p><strong>Total: </strong> EUR {{total}}</p>\n  </ion-label>\n</ion-item>");

/***/ }),

/***/ 83129:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/shopping-history/shopping-history.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Shopping History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" *ngFor=\"let order of orders\">\n        <app-order-card id=\"{{order.orderId}}\" total=\"{{order.total}}\" createdAt=\"{{order.createdAt}}\" updatedAt=\"{{order.updatedAt}}\"></app-order-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_shopping-history_shopping-history_module_ts-es2015.js.map