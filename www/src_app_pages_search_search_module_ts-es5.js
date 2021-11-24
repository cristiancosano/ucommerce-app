(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_search_search_module_ts"], {
    /***/
    38753:
    /*!*******************************************************!*\
      !*** ./src/app/pages/search/search-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPageRoutingModule": function SearchPageRoutingModule() {
          return (
            /* binding */
            _SearchPageRoutingModule
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


      var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search.page */
      87049);

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
      }];

      var _SearchPageRoutingModule = function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      };

      _SearchPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SearchPageRoutingModule);
      /***/
    },

    /***/
    16785:
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPageModule": function SearchPageModule() {
          return (
            /* binding */
            _SearchPageModule
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


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-routing.module */
      38753);
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search.page */
      87049);
      /* harmony import */


      var src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/product-card/product-card.module */
      12751);

      var _SearchPageModule = function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      };

      _SearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule, src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponentModule],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
      })], _SearchPageModule);
      /***/
    },

    /***/
    87049:
    /*!*********************************************!*\
      !*** ./src/app/pages/search/search.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPage": function SearchPage() {
          return (
            /* binding */
            _SearchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search.page.html */
      86620);
      /* harmony import */


      var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search.page.scss */
      15411);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product/product.service */
      53845);

      var _SearchPage = /*#__PURE__*/function () {
        function SearchPage(productService) {
          _classCallCheck(this, SearchPage);

          this.productService = productService;
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchProducts",
          value: function searchProducts() {
            var _this = this;

            this.products = undefined;
            if (this.searchText.length > 3) this.productService.getProductsByText(this.searchText).then(function (products) {
              _this.products = products;
            });
          }
        }, {
          key: "scanNfcTag",
          value: function scanNfcTag() {}
        }]);

        return SearchPage;
      }();

      _SearchPage.ctorParameters = function () {
        return [{
          type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }];
      };

      _SearchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchPage);
      /***/
    },

    /***/
    15411:
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    86620:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"scanNfcTag()\">\n    <ion-fab-button color=\"dark\">\n      <ion-icon name=\"scan-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-searchbar [(ngModel)]=\"searchText\" (ionChange)=\"searchProducts()\"></ion-searchbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let product of products\">\n        <app-product-card id=\"{{product.productId}}\" name=\"{{product.name}}\" description=\"{{product.description}}\" price=\"{{product.unitPrice}}\" image=\"https://picsum.photos/800/400\"></app-product-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_search_search_module_ts-es5.js.map