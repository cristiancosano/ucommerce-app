(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["common"], {
    /***/
    17658:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      45133);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      76887);
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      84366);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    54369:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      5392);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    76887:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    70977:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    89046:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    11443:
    /*!*******************************************************************!*\
      !*** ./src/app/components/product-card/product-card.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardComponent": function ProductCardComponent() {
          return (
            /* binding */
            _ProductCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_product_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card.component.html */
      96291);
      /* harmony import */


      var _product_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card.component.scss */
      53583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _ProductCardComponent = /*#__PURE__*/function () {
        function ProductCardComponent() {
          _classCallCheck(this, ProductCardComponent);
        }

        _createClass(ProductCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardComponent;
      }();

      _ProductCardComponent.ctorParameters = function () {
        return [];
      };

      _ProductCardComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        price: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ProductCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-product-card',
        template: _raw_loader_product_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardComponent);
      /***/
    },

    /***/
    12751:
    /*!****************************************************************!*\
      !*** ./src/app/components/product-card/product-card.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardComponentModule": function ProductCardComponentModule() {
          return (
            /* binding */
            _ProductCardComponentModule
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


      var _product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-card.component */
      11443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _ProductCardComponentModule = function ProductCardComponentModule() {
        _classCallCheck(this, ProductCardComponentModule);
      };

      _ProductCardComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
        exports: [_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
        providers: []
      })], _ProductCardComponentModule);
      /***/
    },

    /***/
    10142:
    /*!******************************************************************!*\
      !*** ./src/app/pages/products/product/product-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductPageRoutingModule": function ProductPageRoutingModule() {
          return (
            /* binding */
            _ProductPageRoutingModule
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


      var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product.page */
      28825);

      var routes = [{
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage
      }];

      var _ProductPageRoutingModule = function ProductPageRoutingModule() {
        _classCallCheck(this, ProductPageRoutingModule);
      };

      _ProductPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProductPageRoutingModule);
      /***/
    },

    /***/
    28825:
    /*!********************************************************!*\
      !*** ./src/app/pages/products/product/product.page.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductPage": function ProductPage() {
          return (
            /* binding */
            _ProductPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product.page.html */
      90718);
      /* harmony import */


      var _product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.page.scss */
      55229);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product/product.service */
      53845);
      /* harmony import */


      var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cart/cart.service */
      20053);

      var _ProductPage = /*#__PURE__*/function () {
        function ProductPage(route, productService, loadingController, cartService) {
          _classCallCheck(this, ProductPage);

          this.route = route;
          this.productService = productService;
          this.loadingController = loadingController;
          this.cartService = cartService;
          this.product = {
            name: '',
            categoryId: 0,
            unitPrice: 0
          };
          this.loadError = false;
        }

        _createClass(ProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = Number(this.route.snapshot.paramMap.get('id'));
            this.presentLoading();
            this.getProduct(); //
          }
        }, {
          key: "addCart",
          value: function addCart() {
            this.productExtended = {
              "productId": this.id,
              "quantity": this.quantity,
              "name": this.product.name,
              "unitPrice": this.product.unitPrice,
              "categoryId": this.product.categoryId
            };
            this.cartService.addProductToCart();
            console.log("product: ", this.product);
          }
        }, {
          key: "getProduct",
          value: function getProduct() {
            var _this = this;

            this.productService.getProduct(this.id).then(function (product) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.product = product;
                        this.loading.then(function (message) {
                          return message.dismiss('loaded', 'ok');
                        });

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            })["catch"](function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        return _context4.abrupt("return", this.loading.then(function (message) {
                          return message.dismiss('not loaded', 'api timeout');
                        }));

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.loading = this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        backdropDismiss: false
                      });
                      this.loading.then(function (message) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var _yield$message$onDidD, data, role;

                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  message.present();
                                  _context5.next = 3;
                                  return message.onDidDismiss();

                                case 3:
                                  _yield$message$onDidD = _context5.sent;
                                  data = _yield$message$onDidD.data;
                                  role = _yield$message$onDidD.role;

                                  if (role == undefined || role == 'api timeout') {
                                    this.loadError = true;
                                  }

                                case 7:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ProductPage;
      }();

      _ProductPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService
        }];
      };

      _ProductPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductPage);
      /***/
    },

    /***/
    20053:
    /*!***********************************************!*\
      !*** ./src/app/services/cart/cart.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartService": function CartService() {
          return (
            /* binding */
            _CartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      24766);
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../user/user.service */
      33626);
      /* harmony import */


      var _product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product/product.service */
      53845);

      var _CartService = /*#__PURE__*/function () {
        function CartService(http, userService, productService) {
          _classCallCheck(this, CartService);

          this.http = http;
          this.userService = userService;
          this.productService = productService;
          this.cart = [];
          this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost + '/cart';
        }

        _createClass(CartService, [{
          key: "getCartByCustomer",
          value: function getCartByCustomer() {
            var _this3 = this;

            var token = this.userService.getToken();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().appendAll({
              token: token
            });
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve) {
              _this3.http.get(_this3.host, {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "getCartProducts",
          value: function getCartProducts() {
            var _this4 = this;

            var token = this.userService.getToken();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().appendAll({
              token: token
            });
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve) {
              _this4.http.get(_this4.host + '/products', {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "addProductToCart",
          value: function addProductToCart() {
            var _this5 = this;

            var token = this.userService.getToken();
            var quantity = this.cartItem.quantity;
            var productId = this.cartItem.productId;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().appendAll({
              token: token,
              quantity: quantity,
              productId: productId
            });
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve) {
              _this5.http.post(_this5.host, {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "removeProductOfCart",
          value: function removeProductOfCart(productId) {
            var _this6 = this;

            var token = this.userService.getToken();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().appendAll({
              token: token
            });
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve) {
              _this6.http["delete"](_this6.host + productId, {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "removeCart",
          value: function removeCart() {
            var _this7 = this;

            var token = this.userService.getToken();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().appendAll({
              token: token
            });
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve) {
              _this7.http["delete"](_this7.host, {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }, {
          key: "updateItemCart",
          value: function updateItemCart() {
            var _this8 = this;

            var token = this.userService.getToken();
            var quantity = this.cartItem.quantity;
            var productId = this.cartItem.productId;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().appendAll({
              token: token,
              quantity: quantity,
              productId: productId
            });
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve) {
              _this8.http.put(_this8.host, {
                headers: headers,
                params: params
              }).subscribe(function (data) {
                return resolve(data);
              }, function (error) {
                return console.log(error);
              });
            });
          }
        }]);

        return CartService;
      }();

      _CartService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService
        }, {
          type: _product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }];
      };

      _CartService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _CartService);
      /***/
    },

    /***/
    53583:
    /*!*********************************************************************!*\
      !*** ./src/app/components/product-card/product-card.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    55229:
    /*!**********************************************************!*\
      !*** ./src/app/pages/products/product/product.page.scss ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 50%;\n  border-radius: 10px;\n  margin-top: 2.5em;\n}\n\nh1 {\n  text-align: center;\n}\n\n.error {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.151);\n  font-size: 24px;\n  font-style: oblique;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  /* align horizontal */\n  align-items: center;\n  /* align vertical */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDRixXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cblxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXJyb3J7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogYWxpZ24gaG9yaXpvbnRhbCAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBhbGlnbiB2ZXJ0aWNhbCAqL1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    96291:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-card/product-card.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card [routerLink]=\"['/products', id]\">\n  <img src=\"{{image}}\"/>\n  <ion-card-header>\n    <ion-card-subtitle>{{name}}</ion-card-subtitle>\n    <ion-card-title>{{price}}€</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    {{(description.length > 144) ?  (description | slice:0:144)+'...' : description}}\n  </ion-card-content> \n\n</ion-card>";
      /***/
    },

    /***/
    90718:
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product.page.html ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{product.name || 'Loading...'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"product.name !== ''\">\n    <img src=\"https://i.picsum.photos/id/870/200/300.jpg?hmac=JX9iOiKD1A168ozbMTARKt6OKYtgsGx9GaBC8tX7oBg\"/>\n    <h1>{{product.name}}</h1>\n    <p>{{product.description}}</p>\n\n  <ion-button expand=\"block\" (click)=\"addCart()\">Añadir al carrito</ion-button>\n          <ion-item>\n          <ion-label>Cantidad</ion-label>\n          <ion-input placeholder=\"Introduzca un número...\" type=\"number\" [(ngModel)]=\"quantity\"></ion-input>\n        </ion-item>\n    </div>\n  <div *ngIf=\"loadError\" class=\"error\">Error fetching data from api service. Check your internet connection or try again later.</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map