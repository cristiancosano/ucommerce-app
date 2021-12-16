(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_categories_categories_module_ts"], {
    /***/
    39851:
    /*!*********************************************************************!*\
      !*** ./src/app/components/category-card/category-card.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryCardComponent": function CategoryCardComponent() {
          return (
            /* binding */
            _CategoryCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_category_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./category-card.component.html */
      18545);
      /* harmony import */


      var _category_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./category-card.component.scss */
      42474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _CategoryCardComponent = /*#__PURE__*/function () {
        function CategoryCardComponent() {
          _classCallCheck(this, CategoryCardComponent);

          this.colors = ['primary', 'dark', 'success', 'danger', 'secondary', 'medium', 'light', 'warning', 'tertiary'];
        }

        _createClass(CategoryCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.color = this.colors[this.index % this.colors.length];
          }
        }]);

        return CategoryCardComponent;
      }();

      _CategoryCardComponent.ctorParameters = function () {
        return [];
      };

      _CategoryCardComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _CategoryCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-category-card',
        template: _raw_loader_category_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_category_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoryCardComponent);
      /***/
    },

    /***/
    52954:
    /*!******************************************************************!*\
      !*** ./src/app/components/category-card/category-card.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryCardComponentModule": function CategoryCardComponentModule() {
          return (
            /* binding */
            _CategoryCardComponentModule
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


      var _category_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./category-card.component */
      39851);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _CategoryCardComponentModule = function CategoryCardComponentModule() {
        _classCallCheck(this, CategoryCardComponentModule);
      };

      _CategoryCardComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_category_card_component__WEBPACK_IMPORTED_MODULE_0__.CategoryCardComponent],
        exports: [_category_card_component__WEBPACK_IMPORTED_MODULE_0__.CategoryCardComponent]
      })], _CategoryCardComponentModule);
      /***/
    },

    /***/
    49684:
    /*!***************************************************************!*\
      !*** ./src/app/pages/categories/categories-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageRoutingModule": function CategoriesPageRoutingModule() {
          return (
            /* binding */
            _CategoriesPageRoutingModule
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


      var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categories.page */
      69945);

      var routes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_categories_category-products_category-products_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./category-products/category-products.module */
          48577)).then(function (m) {
            return m.CategoryProductsPageModule;
          });
        }
      }];

      var _CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
        _classCallCheck(this, CategoriesPageRoutingModule);
      };

      _CategoriesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CategoriesPageRoutingModule);
      /***/
    },

    /***/
    73043:
    /*!*******************************************************!*\
      !*** ./src/app/pages/categories/categories.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageModule": function CategoriesPageModule() {
          return (
            /* binding */
            _CategoriesPageModule
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


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categories-routing.module */
      49684);
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories.page */
      69945);
      /* harmony import */


      var src_app_components_category_card_category_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/category-card/category-card.module */
      52954);

      var _CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      _CategoriesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesPageRoutingModule, src_app_components_category_card_category_card_module__WEBPACK_IMPORTED_MODULE_2__.CategoryCardComponentModule],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_1__.CategoriesPage]
      })], _CategoriesPageModule);
      /***/
    },

    /***/
    69945:
    /*!*****************************************************!*\
      !*** ./src/app/pages/categories/categories.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPage": function CategoriesPage() {
          return (
            /* binding */
            _CategoriesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories.page.html */
      9996);
      /* harmony import */


      var _categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories.page.scss */
      12036);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/category/category.service */
      53998);

      var _CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage(categoryService) {
          var _this = this;

          _classCallCheck(this, CategoriesPage);

          this.categoryService = categoryService;

          this.getCategories = function () {
            _this.categoryService.getCategories().then(function (data) {
              _this.categories = data;
            });
          };
        }

        _createClass(CategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategories();
          }
        }]);

        return CategoriesPage;
      }();

      _CategoriesPage.ctorParameters = function () {
        return [{
          type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
        }];
      };

      _CategoriesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPage);
      /***/
    },

    /***/
    42474:
    /*!***********************************************************************!*\
      !*** ./src/app/components/category-card/category-card.component.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    12036:
    /*!*******************************************************!*\
      !*** ./src/app/pages/categories/categories.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    18545:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category-card/category-card.component.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card style=\"height: 100%;\" [routerLink]=\"['/categories', id]\" color=\"{{color}}\" class=\"ion-text-center\">\n  <ion-card-header>\n    <ion-card-subtitle>{{name}}</ion-card-subtitle>\n  </ion-card-header>\n</ion-card>";
      /***/
    },

    /***/
    9996:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let category of categories; index as i\">\n        <app-category-card id=\"{{category.id}}\" name=\"{{category.name}}\" index=\"{{i}}\"></app-category-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_categories_categories_module_ts-es5.js.map