(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_categories_category-products_category-products_module_ts"], {
    /***/
    4668:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/categories/category-products/category-products-routing.module.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryProductsPageRoutingModule": function CategoryProductsPageRoutingModule() {
          return (
            /* binding */
            _CategoryProductsPageRoutingModule
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


      var _category_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./category-products.page */
      76370);

      var routes = [{
        path: '',
        component: _category_products_page__WEBPACK_IMPORTED_MODULE_0__.CategoryProductsPage
      }];

      var _CategoryProductsPageRoutingModule = function CategoryProductsPageRoutingModule() {
        _classCallCheck(this, CategoryProductsPageRoutingModule);
      };

      _CategoryProductsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CategoryProductsPageRoutingModule);
      /***/
    },

    /***/
    48577:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/categories/category-products/category-products.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryProductsPageModule": function CategoryProductsPageModule() {
          return (
            /* binding */
            _CategoryProductsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _category_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./category-products-routing.module */
      4668);
      /* harmony import */


      var _category_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./category-products.page */
      76370);
      /* harmony import */


      var src_app_components_category_card_category_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/category-card/category-card.module */
      52954);
      /* harmony import */


      var src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/product-card/product-card.module */
      12751);

      var _CategoryProductsPageModule = function CategoryProductsPageModule() {
        _classCallCheck(this, CategoryProductsPageModule);
      };

      _CategoryProductsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _category_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryProductsPageRoutingModule, src_app_components_category_card_category_card_module__WEBPACK_IMPORTED_MODULE_2__.CategoryCardComponentModule, src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_3__.ProductCardComponentModule],
        declarations: [_category_products_page__WEBPACK_IMPORTED_MODULE_1__.CategoryProductsPage]
      })], _CategoryProductsPageModule);
      /***/
    },

    /***/
    76370:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/categories/category-products/category-products.page.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryProductsPage": function CategoryProductsPage() {
          return (
            /* binding */
            _CategoryProductsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_category_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./category-products.page.html */
      90883);
      /* harmony import */


      var _category_products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./category-products.page.scss */
      49039);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/category/category.service */
      53998);

      var _CategoryProductsPage = /*#__PURE__*/function () {
        function CategoryProductsPage(categoryService, route) {
          var _this = this;

          _classCallCheck(this, CategoryProductsPage);

          this.categoryService = categoryService;
          this.route = route;

          this.getCategory = function () {
            _this.categoryService.getCategory(_this.id).then(function (data) {
              _this.category = data;
            });
          };

          this.getProducts = function () {
            _this.categoryService.getProductsByCategoryId(_this.id).then(function (data) {
              _this.products = data;
            });
          };
        }

        _createClass(CategoryProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = Number(this.route.snapshot.paramMap.get('id'));
            this.products = [];
            this.category = {
              name: ''
            };
            this.getCategory();
            this.getProducts();
          }
        }]);

        return CategoryProductsPage;
      }();

      _CategoryProductsPage.ctorParameters = function () {
        return [{
          type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _CategoryProductsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-category-products',
        template: _raw_loader_category_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_category_products_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoryProductsPage);
      /***/
    },

    /***/
    49039:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/categories/category-products/category-products.page.scss ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1wcm9kdWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    90883:
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/category-products/category-products.page.html ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Category Products for {{category.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let product of products\">\r\n        <app-product-card id=\"{{product.productId}}\" name=\"{{product.name}}\" description=\"{{product.description}}\" price=\"{{product.unitPrice}}\" image=\"https://picsum.photos/800/400\"></app-product-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_categories_category-products_category-products_module_ts-es5.js.map