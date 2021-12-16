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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product/product.service */ 53845);
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ 20053);
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order/order.service */ 6028);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);










let CartPage = class CartPage {
    constructor(route, productService, cartService, router, orderService, toastController) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.orderService = orderService;
        this.toastController = toastController;
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
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2500,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
    pay() {
        this.orderService.createOrder(Number(this.getTotal()), this.cart.items)
            .then(() => {
            this.presentToast('Pedido realizado correctamente!!');
            this.cartService.removeItems();
        })
            .catch(() => {
            this.presentToast('Ha ocurrido un problema al realizar el pedido :(');
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n\n.full-height {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#shopping-cart-image {\n  width: 50%;\n  margin: 5% auto;\n  display: block;\n  filter: grayscale(50%) opacity(40%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7QUFDSiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mdWxsLWhlaWdodHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2hvcHBpbmctY2FydC1pbWFnZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpIG9wYWNpdHkoNDAlKTtcbn0iXX0= */");

/***/ }),

/***/ 4272:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-show-card/cart-show-card.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item  [routerLink]=\"['/cart', id]\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n  </ion-thumbnail>\n  <ion-label>\n    <h3>Cantidad: {{quantity}}</h3>\n    <p>Precio unitario: {{price}}</p>\n    <p><strong>Total: </strong> EUR {{total}}</p>\n  </ion-label>\n</ion-item>");

/***/ }),

/***/ 53516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\"cart.items.length > 0; else noItems\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of cart.items\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-aling-items-center\">\n            <ion-col size-xs=\"5\" size-sm=\"3\" size-md=\"2\" class=\"ion-align-items-center\">\n              <ion-select style=\"margin: 0\" interface=\"popover\" value=\"{{item.quantity}}\" (ionChange)=\"updateItemUnits($event.detail.value, item.productId)\">\n                <ion-select-option value=\"{{i}}\"  *ngFor=\"let element of [].constructor(10); let i = index\">\n                  {{i}}\n                  <span *ngIf=\"i==0\">(eliminar)</span>\n                </ion-select-option>\n\n              </ion-select>\n            </ion-col>\n            <ion-col size-xs=\"7\" size-sm=\"9\" size-md=\"10\">\n              {{item.name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item >\n        Total: <span slot=\"end\">{{getTotal()}} €</span>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"center\">\n      <ion-button expand=\"block\" (click)=\"removeItems()\">Eliminar Carrito</ion-button>\n    </div>\n  \n    <div class=\"center\">\n      <ion-button expand=\"block\" (click)=\"pay()\">Realizar Pedido</ion-button>\n    </div>\n  </div>\n\n  <ng-template #noItems>\n    <div class=\"full-height\">\n      <div class=\"vertical-align-middle\">\n        <img src=\"assets/images/shopping-cart.png\" alt=\"Shopping Cart\" width=\"50%\" id=\"shopping-cart-image\">\n        <p class=\"text-center\">There are no items in the cart. Add first someone product.</p>\n      </div>\n    </div>\n  </ng-template>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts-es2015.js.map