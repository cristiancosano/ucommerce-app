(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_account_personal-information_personal-information_module_ts"], {
    /***/
    92386:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/account/personal-information/personal-information-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInformationPageRoutingModule": function PersonalInformationPageRoutingModule() {
          return (
            /* binding */
            _PersonalInformationPageRoutingModule
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


      var _personal_information_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./personal-information.page */
      44779);

      var routes = [{
        path: '',
        component: _personal_information_page__WEBPACK_IMPORTED_MODULE_0__.PersonalInformationPage
      }];

      var _PersonalInformationPageRoutingModule = function PersonalInformationPageRoutingModule() {
        _classCallCheck(this, PersonalInformationPageRoutingModule);
      };

      _PersonalInformationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PersonalInformationPageRoutingModule);
      /***/
    },

    /***/
    85701:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/account/personal-information/personal-information.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInformationPageModule": function PersonalInformationPageModule() {
          return (
            /* binding */
            _PersonalInformationPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./personal-information-routing.module */
      92386);
      /* harmony import */


      var _personal_information_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./personal-information.page */
      44779);

      var _PersonalInformationPageModule = function PersonalInformationPageModule() {
        _classCallCheck(this, PersonalInformationPageModule);
      };

      _PersonalInformationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalInformationPageRoutingModule],
        declarations: [_personal_information_page__WEBPACK_IMPORTED_MODULE_1__.PersonalInformationPage]
      })], _PersonalInformationPageModule);
      /***/
    },

    /***/
    44779:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/account/personal-information/personal-information.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInformationPage": function PersonalInformationPage() {
          return (
            /* binding */
            _PersonalInformationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_personal_information_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./personal-information.page.html */
      18219);
      /* harmony import */


      var _personal_information_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./personal-information.page.scss */
      15001);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/user.service */
      33626);

      var _PersonalInformationPage = /*#__PURE__*/function () {
        function PersonalInformationPage(userService) {
          _classCallCheck(this, PersonalInformationPage);

          this.userService = userService;
        }

        _createClass(PersonalInformationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.userService.getDecodedToken();
            this.email = this.user.email;
            this.name = this.user.name;
            this.phone = this.user.phone;
            this.password = this.user.password;
          }
        }, {
          key: "saveProfile",
          value: function saveProfile() {
            this.userService.update(this.name, this.email, this.password, this.phone).then(function (data) {
              return console.log(data);
            })["catch"](function (error) {
              return console.log(error);
            });
            this.userService.logout();
          }
        }]);

        return PersonalInformationPage;
      }();

      _PersonalInformationPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }];
      };

      _PersonalInformationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-personal-information',
        template: _raw_loader_personal_information_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_personal_information_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PersonalInformationPage);
      /***/
    },

    /***/
    15001:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/account/personal-information/personal-information.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1pbmZvcm1hdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    18219:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/personal-information/personal-information.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My personal information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label>Name</ion-label>\n    <ion-input [(ngModel)]=\"name\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Password</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>E-mail</ion-label>\n    <ion-input [(ngModel)]=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Phone</ion-label>\n    <ion-input [(ngModel)]=\"phone\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" (click)=\"saveProfile()\">Update profile</ion-button>\n  <ion-label>\n    Warning: Deberá volver a iniciar sesión\n  </ion-label>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_account_personal-information_personal-information_module_ts-es5.js.map