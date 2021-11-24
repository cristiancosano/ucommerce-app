(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_products_home_module_ts"],{

/***/ 94802:
/*!*******************************************************!*\
  !*** ./src/app/pages/products/home-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 75368);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: ':id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_products_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 63556)).then(m => m.ProductPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 61068:
/*!***********************************************!*\
  !*** ./src/app/pages/products/home.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 94802);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 75368);
/* harmony import */ var src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/product-card/product-card.module */ 12751);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponentModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 75368:
/*!*********************************************!*\
  !*** ./src/app/pages/products/home.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 12776);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 74924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product/product.service */ 53845);





let HomePage = class HomePage {
    constructor(productService) {
        this.productService = productService;
        this.getProducts = () => {
            this.productService.getProducts().then((data) => {
                this.products = data;
            });
        };
    }
    ngOnInit() {
        this.getProducts();
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 74924:
/*!***********************************************!*\
  !*** ./src/app/pages/products/home.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 12776:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/home.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let product of products\">\n          <app-product-card id=\"{{product.productId}}\" name=\"{{product.name}}\" description=\"{{product.description}}\" price=\"{{product.unitPrice}}\" image=\"https://picsum.photos/800/400\"></app-product-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_home_module_ts-es2015.js.map