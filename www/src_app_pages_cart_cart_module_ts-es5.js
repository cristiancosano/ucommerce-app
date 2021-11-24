(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_cart_cart_module_ts"], {
    /***/
    19237:
    /*!***********************************************************************!*\
      !*** ./src/app/components/cart-show-card/cart-show-card.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartShowCardComponent": function CartShowCardComponent() {
          return (
            /* binding */
            _CartShowCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_cart_show_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cart-show-card.component.html */
      4272);
      /* harmony import */


      var _cart_show_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cart-show-card.component.scss */
      20881);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _CartShowCardComponent = /*#__PURE__*/function () {
        function CartShowCardComponent() {
          _classCallCheck(this, CartShowCardComponent);
        }

        _createClass(CartShowCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.total = this.quantity * this.price;
          }
        }]);

        return CartShowCardComponent;
      }();

      _CartShowCardComponent.ctorParameters = function () {
        return [];
      };

      _CartShowCardComponent.propDecorators = {
        quantity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        price: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _CartShowCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cart-show-card',
        template: _raw_loader_cart_show_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cart_show_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CartShowCardComponent);
      /***/
    },

    /***/
    42596:
    /*!********************************************************************!*\
      !*** ./src/app/components/cart-show-card/cart-show-card.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartShowCardComponentModule": function CartShowCardComponentModule() {
          return (
            /* binding */
            _CartShowCardComponentModule
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


      var _cart_show_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cart-show-card.component */
      19237);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _CartShowCardComponentModule = function CartShowCardComponentModule() {
        _classCallCheck(this, CartShowCardComponentModule);
      };

      _CartShowCardComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_cart_show_card_component__WEBPACK_IMPORTED_MODULE_0__.CartShowCardComponent],
        exports: [_cart_show_card_component__WEBPACK_IMPORTED_MODULE_0__.CartShowCardComponent]
      })], _CartShowCardComponentModule);
      /***/
    },

    /***/
    24505:
    /*!***************************************************!*\
      !*** ./src/app/pages/cart/cart-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartPageRoutingModule": function CartPageRoutingModule() {
          return (
            /* binding */
            _CartPageRoutingModule
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cart.page */
      66874);

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
      }];

      var _CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      _CartPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CartPageRoutingModule);
      /***/
    },

    /***/
    72088:
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartPageModule": function CartPageModule() {
          return (
            /* binding */
            _CartPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cart-routing.module */
      24505);
      /* harmony import */


      var _products_product_product_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../products/product/product-routing.module */
      10142);
      /* harmony import */


      var src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/product-card/product-card.module */
      12751);
      /* harmony import */


      var src_app_components_cart_show_card_cart_show_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/cart-show-card/cart-show-card.module */
      42596);
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cart.page */
      66874);

      var _CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      _CartPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule, _products_product_product_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductPageRoutingModule, src_app_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponentModule, src_app_components_cart_show_card_cart_show_card_module__WEBPACK_IMPORTED_MODULE_3__.CartShowCardComponentModule],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_4__.CartPage]
      })], _CartPageModule);
      /***/
    },

    /***/
    66874:
    /*!*****************************************!*\
      !*** ./src/app/pages/cart/cart.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartPage": function CartPage() {
          return (
            /* binding */
            _CartPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cart.page.html */
      53516);
      /* harmony import */


      var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cart.page.scss */
      58365);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product/product.service */
      53845);
      /* harmony import */


      var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cart/cart.service */
      20053);

      var _CartPage = /*#__PURE__*/function () {
        function CartPage(route, productService, cartService, router) {
          var _this = this;

          _classCallCheck(this, CartPage);

          this.route = route;
          this.productService = productService;
          this.cartService = cartService;
          this.router = router;
          this.selectedItems = [];
          this.total = 0;

          this.getCartUser = function () {
            _this.cartService.getCartByCustomer().then(function (data) {
              _this.cart = data;
              console.log(data);
            });
          };

          this.getCartProducts = function () {
            _this.cartService.getCartProducts().then(function (data) {
              _this.productsCart = data;

              _this.updateTotalPrice();
            });
          };

          this.updateTotalPrice = function () {
            for (var x = 0; x < _this.productsCart.length; x++) {
              _this.total = _this.total + _this.productsCart[x].quantity * _this.productsCart[x].unitPrice;
            }

            _this.totalBuyPrice = _this.total;
            console.log(_this.total);
          };

          this.updateCart = function () {
            _this.total = 0;

            _this.getCartUser();

            _this.getCartProducts();
          };
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productId = Number(this.route.snapshot.paramMap.get('id'));
            this.getCartUser();
            this.getCartProducts();
            var items = this.productsCart;
            var selected = {};

            var _iterator = _createForOfIteratorHelper(items),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var obj = _step.value;
                selected[obj.productId] = Object.assign(Object.assign({}, obj), {
                  count: 1
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.selectedItems = Object.keys(selected).map(function (key) {
              return selected[key];
            });
            this.total = this.selectedItems.reduce(function (a, b) {
              return a + b.quantity * b.unitPrice;
            }, 0);
          }
        }, {
          key: "remove",
          value: function remove() {
            this.cartService.removeProductOfCart(this.productId); //

            this.router.navigate(["/products"]);
          }
        }]);

        return CartPage;
      }();

      _CartPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }, {
          type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _CartPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CartPage);
      /***/
    },

    /***/
    20881:
    /*!*************************************************************************!*\
      !*** ./src/app/components/cart-show-card/cart-show-card.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXNob3ctY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    58365:
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    4272:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-show-card/cart-show-card.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item  [routerLink]=\"['/cart', id]\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n  </ion-thumbnail>\n  <ion-label>\n    <h3>Cantidad: {{quantity}}</h3>\n    <p>Precio unitario: {{price}}</p>\n    <p><strong>Total: </strong> EUR {{total}}</p>\n  </ion-label>\n</ion-item>";
      /***/
    },

    /***/
    53516:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-button expand=\"block\" (click)=\"updateCart()\">Reload</ion-button>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of selectedItems\" lines=\"inset\">\n     {{item.quantity}} x {{item.name}} - {{item.unitPrice}} €\n     <span slot=\"end\"t> {{item.unitPrice * item.quantity}} € </span>\n    </ion-item>\n    <ion-item class=\"bold\">\n      Total: <span slot=\"end\"> {{total}} € </span>\n    </ion-item>\n  </ion-list>\n\n  <div class=\"center\">\n    <button ion-button class=\"button1\" full round (click)=\"presentModal()\" >Realizar Pedido</button>\n    <!-- Falta hacer la funcion de realizar pedido. -->\n    <button ion-button class=\"button2\" full round (click)=\"remove()\" >Borrar carrito</button>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cart_cart_module_ts-es5.js.map