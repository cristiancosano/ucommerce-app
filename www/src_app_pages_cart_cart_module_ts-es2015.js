(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 19237:
/*!***********************************************************************!*\
  !*** ./src/app/components/cart-show-card/cart-show-card.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartShowCardComponent": function() { return /* binding */ CartShowCardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_cart_show_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart-show-card.component.html */ 4272);
/* harmony import */ var _cart_show_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-show-card.component.scss */ 20881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);




let CartShowCardComponent = class CartShowCardComponent {
    constructor() { }
    ngOnInit() {
        this.total = this.quantity * this.price;
    }
};
CartShowCardComponent.ctorParameters = () => [];
CartShowCardComponent.propDecorators = {
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CartShowCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cart-show-card',
        template: _raw_loader_cart_show_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_show_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartShowCardComponent);



/***/ }),

/***/ 42596:
/*!********************************************************************!*\
  !*** ./src/app/components/cart-show-card/cart-show-card.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartShowCardComponentModule": function() { return /* binding */ CartShowCardComponentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _cart_show_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-show-card.component */ 19237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);







let CartShowCardComponentModule = class CartShowCardComponentModule {
};
CartShowCardComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_cart_show_card_component__WEBPACK_IMPORTED_MODULE_0__.CartShowCardComponent],
        exports: [_cart_show_card_component__WEBPACK_IMPORTED_MODULE_0__.CartShowCardComponent]
    })
], CartShowCardComponentModule);



/***/ }),

/***/ 24505:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": function() { return /* binding */ CartPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 66874);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 72088:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": function() { return /* binding */ CartPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 24505);
/* harmony import */ var _products_product_product_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/product/product-routing.module */ 10142);
/* harmony import */ var src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/product-card/product-card.module */ 12751);
/* harmony import */ var src_app_components_cart_show_card_cart_show_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/cart-show-card/cart-show-card.module */ 42596);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.page */ 66874);










let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule,
            _products_product_product_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductPageRoutingModule,
            src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponentModule,
            src_app_components_cart_show_card_cart_show_card_module__WEBPACK_IMPORTED_MODULE_3__.CartShowCardComponentModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_4__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 66874:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": function() { return /* binding */ CartPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 53516);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 58365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product/product.service */ 53845);
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ 20053);








let CartPage = class CartPage {
    constructor(route, productService, cartService, router) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.cart = { items: [] };
    }
    ngOnInit() {
        this.getItems();
    }
    removeItem(productId) {
        this.cartService.removeItem(productId);
    }
    removeItems() {
        this.cartService.removeItems();
    }
    getItems() {
        this.cartService.getCart().then(cart => this.cart = cart);
    }
    updateItemUnits(quantity, productId) {
        if (quantity > 0)
            this.cartService.updateItem(quantity, productId);
        else
            this.removeItem(productId);
    }
    getTotal() {
        let total = 0;
        for (let product of this.cart.items)
            total += product.quantity * product.unitPrice;
        return total.toFixed(2);
    }
};
CartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 20881:
/*!*************************************************************************!*\
  !*** ./src/app/components/cart-show-card/cart-show-card.component.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXNob3ctY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 58365:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n\n.full-height {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#shopping-cart-image {\n  width: 50%;\n  margin: 5% auto;\n  display: block;\n  filter: grayscale(50%) opacity(40%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7QUFDSiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZ1bGwtaGVpZ2h0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3Nob3BwaW5nLWNhcnQtaW1hZ2V7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpIG9wYWNpdHkoNDAlKTtcclxufSJdfQ== */");

/***/ }),

/***/ 4272:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-show-card/cart-show-card.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item  [routerLink]=\"['/cart', id]\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h3>Cantidad: {{quantity}}</h3>\r\n    <p>Precio unitario: {{price}}</p>\r\n    <p><strong>Total: </strong> EUR {{total}}</p>\r\n  </ion-label>\r\n</ion-item>");

/***/ }),

/***/ 53516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Carrito</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div *ngIf=\"cart.items.length > 0; else noItems\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of cart.items\" class=\"ion-text-wrap\">\r\n        <ion-grid>\r\n          <ion-row class=\"ion-aling-items-center\">\r\n            <ion-col size-xs=\"5\" size-sm=\"3\" size-md=\"2\" class=\"ion-align-items-center\">\r\n              <ion-select style=\"margin: 0\" interface=\"popover\" value=\"{{item.quantity}}\" (ionChange)=\"updateItemUnits($event.detail.value, item.productId)\">\r\n                <ion-select-option value=\"{{i}}\"  *ngFor=\"let element of [].constructor(10); let i = index\">\r\n                  {{i}}\r\n                  <span *ngIf=\"i==0\">(eliminar)</span>\r\n                </ion-select-option>\r\n\r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size-xs=\"7\" size-sm=\"9\" size-md=\"10\">\r\n              {{item.name}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item >\r\n        Total: <span slot=\"end\">{{getTotal()}} €</span>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <div class=\"center\">\r\n      <ion-button expand=\"block\" (click)=\"removeItems()\">Eliminar Carrito</ion-button>\r\n    </div>\r\n  \r\n    <div class=\"center\">\r\n      <ion-button expand=\"block\">Realizar Pedido</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #noItems>\r\n    <div class=\"full-height\">\r\n      <div class=\"vertical-align-middle\">\r\n        <img src=\"assets/images/shopping-cart.png\" alt=\"Shopping Cart\" width=\"50%\" id=\"shopping-cart-image\">\r\n        <p class=\"text-center\">There are no items in the cart. Add first someone product.</p>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts-es2015.js.map