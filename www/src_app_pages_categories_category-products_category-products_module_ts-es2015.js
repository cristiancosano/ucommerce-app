(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_categories_category-products_category-products_module_ts"],{

/***/ 4668:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/categories/category-products/category-products-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryProductsPageRoutingModule": function() { return /* binding */ CategoryProductsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _category_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-products.page */ 76370);




const routes = [
    {
        path: '',
        component: _category_products_page__WEBPACK_IMPORTED_MODULE_0__.CategoryProductsPage
    }
];
let CategoryProductsPageRoutingModule = class CategoryProductsPageRoutingModule {
};
CategoryProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryProductsPageRoutingModule);



/***/ }),

/***/ 48577:
/*!********************************************************************************!*\
  !*** ./src/app/pages/categories/category-products/category-products.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryProductsPageModule": function() { return /* binding */ CategoryProductsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _category_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-products-routing.module */ 4668);
/* harmony import */ var _category_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-products.page */ 76370);
/* harmony import */ var src_app_components_category_card_category_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/category-card/category-card.module */ 52954);
/* harmony import */ var src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/product-card/product-card.module */ 12751);









let CategoryProductsPageModule = class CategoryProductsPageModule {
};
CategoryProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _category_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryProductsPageRoutingModule,
            src_app_components_category_card_category_card_module__WEBPACK_IMPORTED_MODULE_2__.CategoryCardComponentModule,
            src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_3__.ProductCardComponentModule
        ],
        declarations: [_category_products_page__WEBPACK_IMPORTED_MODULE_1__.CategoryProductsPage]
    })
], CategoryProductsPageModule);



/***/ }),

/***/ 76370:
/*!******************************************************************************!*\
  !*** ./src/app/pages/categories/category-products/category-products.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryProductsPage": function() { return /* binding */ CategoryProductsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_category_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category-products.page.html */ 90883);
/* harmony import */ var _category_products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-products.page.scss */ 49039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category/category.service */ 53998);






let CategoryProductsPage = class CategoryProductsPage {
    constructor(categoryService, route) {
        this.categoryService = categoryService;
        this.route = route;
        this.getCategory = () => {
            this.categoryService.getCategory(this.id).then((data) => {
                this.category = data;
            });
        };
        this.getProducts = () => {
            this.categoryService.getProductsByCategoryId(this.id).then((data) => {
                this.products = data;
            });
        };
    }
    ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.products = [];
        this.category = { name: '' };
        this.getCategory();
        this.getProducts();
    }
};
CategoryProductsPage.ctorParameters = () => [
    { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
CategoryProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-category-products',
        template: _raw_loader_category_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryProductsPage);



/***/ }),

/***/ 49039:
/*!********************************************************************************!*\
  !*** ./src/app/pages/categories/category-products/category-products.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1wcm9kdWN0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 90883:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/category-products/category-products.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Category Products for {{category.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let product of products\">\r\n        <app-product-card id=\"{{product.productId}}\" name=\"{{product.name}}\" description=\"{{product.description}}\" price=\"{{product.unitPrice}}\" image=\"https://picsum.photos/800/400\"></app-product-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categories_category-products_category-products_module_ts-es2015.js.map