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


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      /* harmony import */


      var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/order/order.service */
      6028);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      34595);

      var _CartPage = /*#__PURE__*/function () {
        function CartPage(route, productService, cartService, router, orderService, toastController) {
          _classCallCheck(this, CartPage);

          this.route = route;
          this.productService = productService;
          this.cartService = cartService;
          this.router = router;
          this.orderService = orderService;
          this.toastController = toastController;
          this.cart = {
            items: []
          };
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getItems();
          }
        }, {
          key: "removeItem",
          value: function removeItem(productId) {
            this.cartService.removeItem(productId);
          }
        }, {
          key: "removeItems",
          value: function removeItems() {
            this.cartService.removeItems();
          }
        }, {
          key: "getItems",
          value: function getItems() {
            var _this = this;

            this.cartService.getCart().then(function (cart) {
              return _this.cart = cart;
            });
          }
        }, {
          key: "updateItemUnits",
          value: function updateItemUnits(quantity, productId) {
            if (quantity > 0) this.cartService.updateItem(quantity, productId);else this.removeItem(productId);
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            var total = 0;

            var _iterator = _createForOfIteratorHelper(this.cart.items),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var product = _step.value;
                total += product.quantity * product.unitPrice;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return total.toFixed(2);
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2500,
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pay",
          value: function pay() {
            var _this2 = this;

            this.orderService.createOrder(Number(this.getTotal()), this.cart.items).then(function () {
              _this2.presentToast('Pedido realizado correctamente!!');

              _this2.cartService.removeItems();
            })["catch"](function () {
              _this2.presentToast('Ha ocurrido un problema al realizar el pedido :(');
            });
          }
        }]);

        return CartPage;
      }();

      _CartPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }, {
          type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }];
      };

      _CartPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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


      __webpack_exports__["default"] = ".text-center {\n  text-align: center;\n}\n\n.full-height {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#shopping-cart-image {\n  width: 50%;\n  margin: 5% auto;\n  display: block;\n  filter: grayscale(50%) opacity(40%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7QUFDSiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mdWxsLWhlaWdodHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2hvcHBpbmctY2FydC1pbWFnZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpIG9wYWNpdHkoNDAlKTtcbn0iXX0= */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\"cart.items.length > 0; else noItems\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of cart.items\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-aling-items-center\">\n            <ion-col size-xs=\"5\" size-sm=\"3\" size-md=\"2\" class=\"ion-align-items-center\">\n              <ion-select style=\"margin: 0\" interface=\"popover\" value=\"{{item.quantity}}\" (ionChange)=\"updateItemUnits($event.detail.value, item.productId)\">\n                <ion-select-option value=\"{{i}}\"  *ngFor=\"let element of [].constructor(10); let i = index\">\n                  {{i}}\n                  <span *ngIf=\"i==0\">(eliminar)</span>\n                </ion-select-option>\n\n              </ion-select>\n            </ion-col>\n            <ion-col size-xs=\"7\" size-sm=\"9\" size-md=\"10\">\n              {{item.name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item >\n        Total: <span slot=\"end\">{{getTotal()}} €</span>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"center\">\n      <ion-button expand=\"block\" (click)=\"removeItems()\">Eliminar Carrito</ion-button>\n    </div>\n  \n    <div class=\"center\">\n      <ion-button expand=\"block\" (click)=\"pay()\">Realizar Pedido</ion-button>\n    </div>\n  </div>\n\n  <ng-template #noItems>\n    <div class=\"full-height\">\n      <div class=\"vertical-align-middle\">\n        <img src=\"assets/images/shopping-cart.png\" alt=\"Shopping Cart\" width=\"50%\" id=\"shopping-cart-image\">\n        <p class=\"text-center\">There are no items in the cart. Add first someone product.</p>\n      </div>\n    </div>\n  </ng-template>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cart_cart_module_ts-es5.js.map