(self["webpackChunkucommerce_app"] = self["webpackChunkucommerce_app"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 14450:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": function() { return /* binding */ AccountPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 15024);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 44088)).then(m => m.LoginPageModule)
    },
    {
        path: 'personal-information',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_personal-information_personal-information_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./personal-information/personal-information.module */ 85701)).then(m => m.PersonalInformationPageModule)
    },
    {
        path: 'shopping-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_shopping-history_shopping-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shopping-history/shopping-history.module */ 23970)).then(m => m.ShoppingHistoryPageModule)
    },
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 87674:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": function() { return /* binding */ AccountPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 14450);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 15024);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 15024:
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": function() { return /* binding */ AccountPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.page.html */ 71232);
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss */ 73788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ 33626);






let AccountPage = class AccountPage {
    constructor(actionSheetController, userService) {
        this.actionSheetController = actionSheetController;
        this.userService = userService;
        this.isAuth = () => {
            return this.userService.isAuth();
        };
    }
    ngOnInit() {
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Are you sure you want logout?',
                buttons: [
                    {
                        text: 'Logout',
                        role: 'destructive',
                        icon: 'log-out-outline',
                        handler: () => {
                            this.userService.logout();
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => console.log('Cancel clicked')
                    }
                ]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountPage);



/***/ }),

/***/ 73788:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW06aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ 71232:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>My Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngIf=\"isAuth() else login\">\n      <ion-item [routerLink]=\"['/account/personal-information']\">\n        <ion-label>My personal information</ion-label>\n      </ion-item>\n      <ion-item [routerLink]=\"['/account/shopping-history']\">\n        <ion-label>Shopping history</ion-label>\n      </ion-item>\n      <ion-item (click)=\"presentActionSheet()\">\n        <ion-label>Logout</ion-label>\n      </ion-item>\n    </div>\n\n    <ng-template #login> \n      <ion-item [routerLink]=\"['/account/login']\">\n        <ion-label>Login</ion-label>\n      </ion-item>\n    </ng-template>\n    \n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts-es2015.js.map