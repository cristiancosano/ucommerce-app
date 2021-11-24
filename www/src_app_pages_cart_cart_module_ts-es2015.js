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
        this.selectedItems = [];
        this.total = 0;
        this.getCartUser = () => {
            this.cartService.getCartByCustomer().then((data) => {
                this.cart = data;
                console.log(data);
            });
        };
        this.getCartProducts = () => {
            this.cartService.getCartProducts().then((data) => {
                this.productsCart = data;
                this.updateTotalPrice();
            });
        };
        this.updateTotalPrice = () => {
            for (let x = 0; x < this.productsCart.length; x++) {
                this.total = this.total + (this.productsCart[x].quantity * this.productsCart[x].unitPrice);
            }
            this.totalBuyPrice = this.total;
            console.log(this.total);
        };
        this.updateCart = () => {
            this.total = 0;
            this.getCartUser();
            this.getCartProducts();
        };
    }
    ngOnInit() {
        this.productId = Number(this.route.snapshot.paramMap.get('id'));
        this.getCartUser();
        this.getCartProducts();
        let items = this.productsCart;
        let selected = {};
        for (let obj of items) {
            selected[obj.productId] = Object.assign(Object.assign({}, obj), { count: 1 });
        }
        this.selectedItems = Object.keys(selected).map(key => selected[key]);
        this.total = this.selectedItems.reduce((a, b) => a + (b.quantity * b.unitPrice), 0);
    }
    remove() {
        this.cartService.removeProductOfCart(this.productId); //
        this.router.navigate(["/products"]);
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-button expand=\"block\" (click)=\"updateCart()\">Reload</ion-button>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of selectedItems\" lines=\"inset\">\n     {{item.quantity}} x {{item.name}} - {{item.unitPrice}} €\n     <span slot=\"end\"t> {{item.unitPrice * item.quantity}} € </span>\n    </ion-item>\n    <ion-item class=\"bold\">\n      Total: <span slot=\"end\"> {{total}} € </span>\n    </ion-item>\n  </ion-list>\n\n  <div class=\"center\">\n    <button ion-button class=\"button1\" full round (click)=\"presentModal()\" >Realizar Pedido</button>\n    <!-- Falta hacer la funcion de realizar pedido. -->\n    <button ion-button class=\"button2\" full round (click)=\"remove()\" >Borrar carrito</button>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts-es2015.js.map