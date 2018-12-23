(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n</head>\n\n<body>\n\n  <div class=\"container\" style=\"margin-top:100px\">\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1 class=\"display-3\">Hello, world!</h1>\n        <p>\n          This is a template for a simple marketing or informational website.\n          It includes a large callout called a jumbotron and three supporting\n          pieces of content. Use it as a starting point to create something\n          more unique.\n        </p>\n        <p>\n          <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more »</a>\n        </p>\n      </div>\n    </div>\n\n    \n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-product/add-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n</head>\n\n<body>\n\n  <div class=\"container\" style=\"margin-top:100px\">\n    <br />\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4>Add Product</h4>\n            <hr />\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form [formGroup]=\"addProductForm\">\n              <div class=\"form-group row\">\n                <label for=\"name\" class=\"col-4 col-form-label\">Name</label>\n                <div class=\"col-8\">\n                  <input id=\"name\" name=\"name\" placeholder=\"name\" class=\"form-control here\" type=\"text\" [formControl]=\"name\"\n                    [class.is-valid]=\"name.valid\" [class.is-invalid]=\"name.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n\n                  <div class=\"invalid-feedback\">Please name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"title\" class=\"col-4 col-form-label\">Title</label>\n                <div class=\"col-8\">\n                  <input id=\"title\" name=\"title\" placeholder=\"title\" class=\"form-control here\" type=\"text\"\n                    [formControl]=\"title\" [class.is-valid]=\"title.valid\" [class.is-invalid]=\"title.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n\n                  <div class=\"invalid-feedback\">\n                    Please title is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"name\" class=\"col-4 col-form-label\">SubTitle</label>\n                <div class=\"col-8\">\n                  <input id=\"subTitle\" name=\"subTitle\" placeholder=\"subTitle\" class=\"form-control here\" type=\"text\"\n                    [formControl]=\"subTitle\" [class.is-valid]=\"subTitle.valid\" [class.is-invalid]=\"subTitle.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please SubTitle is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"time\" class=\"col-4 col-form-label\">Price</label>\n                <div class=\"col-8\">\n                  <input id=\"price\" name=\"price\" placeholder=\"price\" class=\"form-control here\" type=\"number\"\n                    [formControl]=\"price\" [class.is-valid]=\"price.valid\" [class.is-invalid]=\"price.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please Price is required.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"price\" class=\"col-4 col-form-label\">Description</label>\n                <div class=\"col-8\">\n                  <textarea id=\"description\" name=\"description\" placeholder=\"description\" class=\"form-control here\"\n                    [formControl]=\"description\" [class.is-valid]=\"description.valid\" [class.is-invalid]=\"description.invalid\">\n                    </textarea>\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please Price is required.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"time\" class=\"col-4 col-form-label\">Image Online URL</label>\n                <div class=\"col-8\">\n                  <input id=\"image\" name=\"image\" placeholder=\"Image Online URL\" class=\"form-control here\" type=\"text\"\n                    [formControl]=\"imageOnlineURL\" [class.is-valid]=\"imageOnlineURL.valid\" [class.is-invalid]=\"imageOnlineURL.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please Image is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"offset-4 col-8\">\n                  <button name=\"submit\" type=\"submit\" class=\"btn btn-primary\" (click)=\"save()\">\n                    Save\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.subTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.imageOnlineURL = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.addProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: this.name,
            title: this.title,
            subTitle: this.subTitle,
            price: this.price,
            description: this.description,
            imageOnlineURL: this.imageOnlineURL
        });
    };
    AddProductComponent.prototype.save = function () {
        var _this = this;
        this.productService.addProduct(this.addProductForm.value).subscribe(function (data) {
            if (data) {
                _this.router.navigate(["adminProducts"]);
            }
        });
    };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/admin-products/admin-products.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-products/admin-products.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-products/admin-products.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-products/admin-products.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n</head>\n\n<body>\n\n  <div class=\"container\" style=\"margin-top:100px\">\n    <hr />\n    <h1 style=\"display: inline-block;\">Products</h1>\n    <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"goToAddProduct()\">\n      Add Product\n    </button>\n    <hr />\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Title</th>\n          <th scope=\"col\">SubTitle</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\" style=\"width: 350px;\">Description</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of products\">\n          <td>{{product.name}}</td>\n          <td>{{product.title}}</td>\n          <td>{{product.subTitle}}</td>\n          <td>{{product.price}}</td>\n          <td>{{product.description}}</td>\n          <td>\n            <button class=\"btn btn-outline-primary\" (click)=\"getEdit(product.id)\">Edit</button> |\n            <button class=\"btn btn-danger\" (click)=\"delete(product.id)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n     </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/admin-products/admin-products.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-products/admin-products.component.ts ***!
  \************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService
            .getProducts()
            .subscribe(function (products) { return (_this.products = products); });
    };
    AdminProductsComponent.prototype.getEdit = function (id) {
        this.router.navigate(["editProduct", id]);
    };
    AdminProductsComponent.prototype.delete = function (id) {
        var _this = this;
        this.productService.deleteProduct(id).subscribe(function (data) {
            if (data) {
                _this.productService.getProducts().subscribe(function (dd) { return (_this.products = dd); });
            }
        });
    };
    AdminProductsComponent.prototype.goToAddProduct = function () {
        this.router.navigate(["addProduct"]);
    };
    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin-products/admin-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin-users/admin-users.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Page Title</title>\n\n    <link\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n  </head>\n  <body>\n\n    <div class=\"container\" style=\"margin-top:100px\">\n      <hr />\n      <h1 style=\"display: inline-block;\">Users</h1>\n      <hr />\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Phone</th>\n            <th scope=\"col\">Mobile</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.firstName}}</td>\n            <td>{{user.lastName}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.phone}}</td>\n            <td>{{user.mobile}}</td>\n          </tr>\n        </tbody>\n      </table>\n\n     </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.ts ***!
  \******************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(userService) {
        this.userService = userService;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { _this.users = data; });
    };
    AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin-users/admin-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-products/admin-products.component */ "./src/app/admin-products/admin-products.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");














var routes = [
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: "products",
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: "signup",
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
    },
    {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    },
    {
        path: "product/:id",
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]
    },
    {
        path: "checkout",
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]
    },
    {
        path: "adminProducts",
        component: _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_10__["AdminProductsComponent"]
    },
    {
        path: "adminusers",
        component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_12__["AdminUsersComponent"]
    },
    {
        path: "addProduct",
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"]
    },
    {
        path: "editProduct/:id",
        component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_11__["EditProductComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n</head>\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/products']\">Maba</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!userService.isAdmin\">\n        <a class=\"nav-link\" [routerLink]=\"['/products']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!userService.isAdmin\">\n        <a class=\"nav-link\" [routerLink]=\"['/products']\">Products</a></li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"userService.isAdmin\">\n        <a class=\"nav-link\" [routerLink]=\"['/adminProducts']\">adminProducts</a></li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"userService.isAdmin\">\n        <a class=\"nav-link\" [routerLink]=\"['/adminusers']\">Users</a></li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!userService.isAdmin\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a></li>\n    </ul>\n\n    <div class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2 ml-15\" type=\"text\" placeholder=\"Search\" *ngIf=\"!userService.isAdmin\" />\n      <a class=\"p-cart\" *ngIf=\"!userService.isAdmin\" (click)=\"goCart()\">\n        <span class=\"material-icons md-48 \">shopping_cart</span>\n        <span class=\"badge badge-light bg-secondary\">{{productService.countTotal}}</span>\n      </a>\n      <button *ngIf=\"!userService.isLogin\" class=\"btn btn-secondary my-2 my-sm-0 ml-4\" [routerLink]=\"['/signup']\">Sign\n        up</button>\n      <button *ngIf=\"!userService.isLogin\" class=\"btn btn-secondary my-2 my-sm-0 ml-2\" [routerLink]=\"['/login']\">Login</button>\n      <button *ngIf=\"userService.isLogin\" class=\"btn btn-secondary my-2 my-sm-0 ml-2\" [routerLink]=\"['/profile']\">profile</button>\n      <button *ngIf=\"userService.isLogin\" class=\"btn btn-secondary my-2 my-sm-0 ml-2\" (click)=\"logOut()\">logOut</button>\n\n    </div>\n  </div>\n</nav>\n<div class=\"container\" style=\"margin-top: 100px\">\n  <router-outlet></router-outlet>\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2017-2018 Maba</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(userService, productService, router, toastr) {
        this.userService = userService;
        this.productService = productService;
        this.router = router;
        this.toastr = toastr;
        this.title = 'finalProject';
    }
    AppComponent.prototype.logOut = function () {
        this.userService.isLogin = false;
        this.userService.isAdmin = false;
        this.toastr.successToastr("Logged out Successfully");
        this.router.navigateByUrl("/login");
    };
    AppComponent.prototype.goCart = function () {
        this.router.navigateByUrl("/checkout");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-products/admin-products.component */ "./src/app/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"],
                _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_14__["EditProductComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_17__["AdminProductsComponent"],
                _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__["AdminUsersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot()
            ],
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"], _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n  <style>\n    .custom-radio {\n        margin-bottom: 5px;\n      }\n    </style>\n</head>\n\n<body>\n  <div class=\"container\" style=\"margin-top:100px\">\n    <div class=\"py-5 text-center\">\n      <i class=\"material-icons\"> add_shopping_cart </i>\n      <h2>Checkout</h2>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 order-md-2 mb-4\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Your cart</span>\n          <span class=\"badge badge-secondary badge-pill\">{{ countTotal }}</span>\n        </h4>\n        <ul class=\"list-group mb-3\">\n          <li\n            class=\"list-group-item d-flex justify-content-between lh-condensed\"\n            *ngFor=\"let c of cart\"\n          >\n            <div>\n              <h6 class=\"my-0\"> {{ c.title}}</h6>\n              <small class=\"text-muted\"> {{c.subTitle}}</small>\n            </div>\n            <span class=\"text-muted\"> count({{c.count}})</span>\n            <span class=\"text-muted\"> {{c.price | currency}} </span>\n          </li>\n          <li\n            class=\"list-group-item d-flex justify-content-between lh-condensed\"\n            *ngFor=\"let c of cart\"\n          >\n            <div>\n              <h6 class=\"my-0\">{{ c.title}}</h6>\n              <small class=\"text-muted\">{{c.subTitle}}</small>\n            </div>\n            <span class=\"text-muted\"> count({{c.count}})</span>\n            <span class=\"text-muted\"> {{c.price | currency}} </span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <span>Total (USD)</span> <strong>{{totalPrice | currency}}</strong>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-8 order-md-1\">\n        <h4 class=\"mb-3\">Billing address</h4>\n        <form class=\"needs-validation\" novalidate=\"\">\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"firstName\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\" />\n              <div class=\"invalid-feedback\">\n                Valid first name is required.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"lastName\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\" />\n              <div class=\"invalid-feedback\">Valid last name is required.</div>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" />\n            <div class=\"invalid-feedback\">\n              Please enter a valid email address for shipping updates.\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required=\"\" />\n            <div class=\"invalid-feedback\">\n              Please enter your shipping address.\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\" />\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-5 mb-3\">\n              <label for=\"country\">Country</label>\n              <select class=\"custom-select d-block w-100\" id=\"country\" required=\"\">\n                <option value=\"\">Choose...</option>\n                <option>Palestine</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Please select a valid country.\n              </div>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label for=\"state\">State</label>\n              <select class=\"custom-select d-block w-100\" id=\"state\" required=\"\">\n                <option value=\"\">Choose...</option>\n                <option>Gaza</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Please provide a valid state.\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"zip\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\" />\n              <div class=\"invalid-feedback\">Zip code required.</div>\n            </div>\n          </div>\n          <hr class=\"mb-4\" />\n\n          <h4 class=\"mb-3\">Payment</h4>\n\n          <div class=\"d-block my-3\">\n            <div class=\"custom-control custom-radio\">\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\" />\n              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\" />\n              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\" />\n              <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n            </div>\n          </div>\n          <hr class=\"mb-4\" />\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">\n            Continue to checkout\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(proService) {
        this.proService = proService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proService.getCart().subscribe(function (data) {
            _this.cart = data["cart"];
            _this.totalPrice = data["totalPrice"];
            _this.countTotal = data["countTotal"];
        });
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/edit-product/edit-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n</head>\n\n<body>\n\n  <div class=\"container\" style=\"margin-top:100px\">\n    <br />\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4>Edit Product</h4>\n            <hr />\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form [formGroup]=\"editProductForm\">\n              <div class=\"form-group row\">\n                <label for=\"name\" class=\"col-4 col-form-label\">Name</label>\n                <div class=\"col-8\">\n                  <input id=\"name\" name=\"name\" placeholder=\"name\" class=\"form-control here\" type=\"text\" [formControl]=\"name\"\n                    [class.is-valid]=\"name.valid\" [class.is-invalid]=\"name.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n\n                  <div class=\"invalid-feedback\">Please name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"title\" class=\"col-4 col-form-label\">Title</label>\n                <div class=\"col-8\">\n                  <input id=\"title\" name=\"title\" placeholder=\"title\" class=\"form-control here\" type=\"text\"\n                    [formControl]=\"title\" [class.is-valid]=\"title.valid\" [class.is-invalid]=\"title.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n\n                  <div class=\"invalid-feedback\">\n                    Please title is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"name\" class=\"col-4 col-form-label\">SubTitle</label>\n                <div class=\"col-8\">\n                  <input id=\"subTitle\" name=\"subTitle\" placeholder=\"subTitle\" class=\"form-control here\" type=\"text\"\n                    [formControl]=\"subTitle\" [class.is-valid]=\"subTitle.valid\" [class.is-invalid]=\"subTitle.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please SubTitle is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"time\" class=\"col-4 col-form-label\">Price</label>\n                <div class=\"col-8\">\n                  <input id=\"price\" name=\"price\" placeholder=\"price\" class=\"form-control here\" type=\"number\"\n                    [formControl]=\"price\" [class.is-valid]=\"price.valid\" [class.is-invalid]=\"price.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please Price is required.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"price\" class=\"col-4 col-form-label\">Description</label>\n                <div class=\"col-8\">\n                  <textarea id=\"description\" name=\"description\" placeholder=\"description\" class=\"form-control here\"\n                    [formControl]=\"description\" [class.is-valid]=\"description.valid\" [class.is-invalid]=\"description.invalid\">\n                    </textarea>\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please Price is required.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"time\" class=\"col-4 col-form-label\">Image Online URL</label>\n                <div class=\"col-8\">\n                  <input id=\"image\" name=\"image\" placeholder=\"Image Online URL\" class=\"form-control here\" type=\"text\"\n                    [formControl]=\"imageOnlineURL\" [class.is-valid]=\"imageOnlineURL.valid\" [class.is-invalid]=\"imageOnlineURL.invalid\" />\n                  <div class=\"valid-feedback\">Looks good!</div>\n                  <div class=\"invalid-feedback\">\n                    Please Image is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"offset-4 col-8\">\n                  <button name=\"submit\" type=\"submit\" class=\"btn btn-primary\" (click)=\"save()\">\n                    Save\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.ts ***!
  \********************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditProductComponent = /** @class */ (function () {
    // product;
    function EditProductComponent(productService, router, activatedRoute) {
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.subTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.imageOnlineURL = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: this.name,
            title: this.title,
            subTitle: this.subTitle,
            price: this.price,
            description: this.description,
            imageOnlineURL: this.imageOnlineURL
        });
        this.productService.getProduct(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.product = data;
            _this.name.setValue(_this.product.name);
            _this.title.setValue(_this.product.title);
            _this.subTitle.setValue(_this.product.subTitle);
            _this.price.setValue(_this.product.price);
            _this.description.setValue(_this.product.description);
            _this.imageOnlineURL.setValue(_this.product.image);
        });
    };
    EditProductComponent.prototype.save = function () {
        var _this = this;
        this.productService.editProduct(this.editProductForm.value).subscribe(function (data) {
            if (data) {
                _this.router.navigate(["adminProducts"]);
            }
        });
    };
    EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/edit-product/edit-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Page Title</title>\n\n\n    <link\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n  </head>\n  <body>\n    <div class=\"container\" style=\"margin-top:100px\">\n      <form [formGroup]=\"loginForm\">\n        <fieldset>\n          <legend>Login</legend>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"exampleInputEmail1\"\n              placeholder=\"Enter email\"\n              formControlName=\"email\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input\n              type=\"password\"\n              class=\"form-control\"\n              id=\"exampleInputPassword1\"\n              placeholder=\"Password\"\n              formControlName=\"password\"\n\n            />\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n        </fieldset>\n      </form>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    // printLogin() { console.log(this.loginForm.value); }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login2(this.loginForm.value).subscribe(function (data) {
            if (data["access_token"]) {
                localStorage.setItem("token", data["access_token"]);
                _this.userService.isLogin = true;
                if (data["roles"].includes("Admin")) {
                    _this.userService.isAdmin = true;
                    _this.toastr.successToastr("Logged in successfully");
                    _this.router.navigateByUrl("/adminProducts");
                }
                else {
                    _this.toastr.successToastr("Logged in successfully");
                    _this.router.navigateByUrl("/products");
                }
            }
        }, function (error) {
            _this.userService.isLogin = false;
            _this.toastr.errorToastr("Incorrect email or password");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Page Title</title>\n\n    <link\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n  </head>\n  <body>\n    <div class=\"container\" style=\"margin-top:100px\">\n      <div class=\"card mb-3\">\n        <h3 class=\"card-header\">{{product.name}}</h3>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{product.title}}</h5>\n          <h6 class=\"card-subtitle text-muted\">{{product.subTitle}}</h6>\n        </div>\n        <img\n          style=\"display: block;\"\n          src= {{product.image}}\n          width=\"200\"\n          height=\"200px\"\n          alt=\"Card image\"\n        />\n        <div class=\"card-body\"><p class=\"card-text\">{{product.description}}</p></div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">{{product.category}}</li>\n          <li class=\"list-group-item\">{{product.price}}</li>\n        </ul>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary \" (click)=\"addToCart(product.id)\">Add to cart</button>\n        </div>\n      </div>\n    </div>\n </body>\n </html>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, productService, userService, toastr, router) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService
            .getProduct(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.product = data;
        });
    };
    ProductComponent.prototype.addToCart = function (id) {
        var _this = this;
        if (!this.userService.isLogin) {
            this.toastr.errorToastr("You must be logged in");
            this.router.navigateByUrl("/login");
        }
        else {
            this.productService.addToCart(id).subscribe(function (data) {
                _this.productService.countTotal = +data;
            }, function (errors) {
                console.log(errors);
            });
        }
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-flush .list-group-item{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWZsdXNoIC5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Page Title</title>\n\n\n    <link\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n  </head>\n  <body>\n   \n\n    <div class=\"container\" style=\"margin-top:100px\">\n      <div class=\"row\">\n        <div class=\"col-3\" *ngFor=\"let product of products\">\n          <div class=\"card mb-3\">\n            <h3 class=\"card-header\">{{product.category}}</h3>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{product.name}}</h5>\n              <h6 class=\"card-subtitle text-muted\">{{product.subTitle}}</h6>\n            </div>\n            <img class=\"img-responsive\"\n              style=\"height: 200px; width: 100%; display: block;\"\n              src={{product.image}}\n              alt=\"Card image\"\n            />\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">{{product.description}}</li>\n            </ul>\n            <div class=\"card-body\">\n              <button type=\"button\" class=\"btn btn-primary \" (click)=\"addToCart(product.id)\">\n                Add to cart\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-primary float-right\"\n              (click)=\"goProduct(product.id)\">\n                View\n              </button>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, userService, toastr, router) {
        this.productService = productService;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.
            getProducts()
            .subscribe(function (products) { return (_this.products = products); });
    };
    ProductsComponent.prototype.goProduct = function (id) {
        this.router.navigate(["product", id]);
        // this.router.navigate("/product");
        // console.log("id",id);
    };
    ProductsComponent.prototype.addToCart = function (id) {
        var _this = this;
        if (!this.userService.isLogin) {
            this.toastr.errorToastr("You must be logged in");
            this.router.navigateByUrl("/login");
        }
        else {
            this.productService.addToCart(id).subscribe(function (data) {
                _this.productService.countTotal = +data;
            }, function (errors) {
                console.log(errors);
            });
        }
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Page Title</title>\n\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" />\n  <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n</head>\n\n<body>\n\n  <div class=\"container\" style=\"margin-top:100px\">\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-10\">\n        <h1>Profile</h1>\n      </div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!-- left col -->\n\n        <div class=\"text-center\">\n          <img src=\"http://ssl.gstatic.com/accounts/ui/avatar_2x.png\" class=\"avatar rounded-circle img-thumbnail\" alt=\"avatar\" />\n          <h6>Upload a different photo...</h6>\n          <input type=\"file\" class=\"text-center center-block file-upload\" />\n        </div>\n        <br />\n      </div>\n      <!-- /col-3 -->\n      <div class=\"col-sm-9\">\n        <form class=\"form\" action=\"##\" method=\"post\" id=\"registrationForm\" [formGroup]=\"profileForm\">\n          <div class=\"form-group\">\n            <div class=\"col-xs-6\">\n              <label for=\"first_name\">\n                <h4>First name</h4>\n              </label>\n              <input type=\"text\" class=\"form-control\" name=\"first_name\" id=\"first_name\" placeholder=\"first name\" title=\"enter your first name if any.\"\n                formControlName=\"firstName\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-6\">\n              <label for=\"last_name\">\n                <h4>Last name</h4>\n              </label>\n              <input type=\"text\" class=\"form-control\" name=\"last_name\" id=\"last_name\" placeholder=\"last name\" title=\"enter your last name if any.\"\n                formControlName=\"lastName\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-xs-6\">\n              <label for=\"phone\">\n                <h4>Phone</h4>\n              </label>\n              <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"enter phone\" title=\"enter your phone number if any.\"\n                formControlName=\"phone\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-xs-6\">\n              <label for=\"mobile\">\n                <h4>Mobile</h4>\n              </label>\n              <input type=\"text\" class=\"form-control\" name=\"mobile\" id=\"mobile\" placeholder=\"enter mobile number\" title=\"enter your mobile number if any.\"\n                formControlName=\"mobile\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-6\">\n              <label for=\"email\">\n                <h4>Email</h4>\n              </label>\n              <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"you@email.com\" title=\"enter your email.\"\n                formControlName=\"email\" />\n            </div>\n          </div>\n          <!-- <div class=\"form-group\">\n              <div class=\"col-xs-6\">\n                <label for=\"email\"><h4>Location</h4></label>\n                <input\n                  type=\"email\"\n                  class=\"form-control\"\n                  id=\"location\"\n                  placeholder=\"somewhere\"\n                  title=\"enter a location\"\n                />\n              </div>\n            </div> -->\n          <div class=\"form-group\">\n            <div class=\"col-xs-12\">\n              <br />\n              <button class=\"btn btn-lg btn-success  d-flex\" type=\"submit\" (click)=\"save()\">\n                <i class=\"material-icons mr-1\"> save </i> Save\n              </button>\n            </div>\n          </div>\n        </form>\n\n        <hr />\n      </div>\n      <!-- /tab-content -->\n    </div>\n    <!-- /col-9 -->\n\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            mobile: this.mobile
        });
        this.userService.getprofile(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.user = data;
            _this.firstName.setValue(_this.user.firstName);
            _this.lastName.setValue(_this.user.lastName);
            _this.email.setValue(_this.user.email);
            _this.phone.setValue(_this.user.phone);
            _this.mobile.setValue(_this.user.mobile);
        });
    };
    ProfileComponent.prototype.save = function () {
        this.userService.editUser(this.profileForm.value);
        // .subscribe(data => {
        // if (data) {
        //   this.router.navigate(["adminProducts"]);
        // }
        // });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var url = "http://oday9.azurewebsites.net";
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        var _this = this;
        this.http = http;
        this.countTotal = 0;
        var token = localStorage.getItem("token");
        if (token) {
            this.getTotal().subscribe(function (data) { return _this.countTotal = +data; });
        }
        this.reqHeaderToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "bearer " + token
        });
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(url + "/api/Products");
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(url + "/api/Products/" + id);
    };
    ProductService.prototype.addProduct = function (product) {
        return this.http.post(url + "/api/Products", product);
    };
    ProductService.prototype.editProduct = function (product) {
        return this.http.put(url + "/api/Products", product);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(url + "/api/Products/" + id);
    };
    ProductService.prototype.addToCart = function (productId) {
        return this.http.post(url + "/api/Carts", { productId: productId }, { headers: this.reqHeaderToken });
    };
    ProductService.prototype.getCart = function () {
        return this.http.get(url + "/api/Carts", { headers: this.reqHeaderToken });
    };
    ProductService.prototype.getTotal = function () {
        return this.http.get(url + "/api/Carts/GetTotal", { headers: this.reqHeaderToken });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var url = "http://oday9.azurewebsites.net";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isLogin = false;
        this.isAdmin = false;
    }
    UserService.prototype.login = function (user) {
        return this.http.post(url + "/auth/login", user);
    };
    UserService.prototype.login2 = function (user) {
        var userData = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/x-www-form-urlencoded" });
        return this.http.post(url + "/token", userData, { headers: reqHeader });
    };
    UserService.prototype.signUp = function (user) {
        return this.http.post(url + "/api/account/register", user);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(url + "/api/users");
    };
    UserService.prototype.getprofile = function (id) {
        return this.http.get(url + "/api/Profile");
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put(url + "/api/Users", user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Page Title</title>\n\n    <link\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"assets/materia/bootstrap.min.css\" />\n  </head>\n  <body>\n\n    <div class=\"container\" style=\"margin-top:100px\">\n      <form [formGroup]=\"signUpForm\">\n        <fieldset>\n          <legend>Sign up</legend>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"exampleInputEmail1\"\n              placeholder=\"Enter email\"\n              formControlName=\"email\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputFirstName1\">First Name</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"exampleInputFirstName1\"\n              placeholder=\"Enter First Name\"\n              formControlName=\"firstName\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputLastName1\">Last Name</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"exampleInputLastName1\"\n              placeholder=\"Enter Last Name\"\n              formControlName=\"lastName\"\n\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input\n              type=\"password\"\n              class=\"form-control\"\n              id=\"exampleInputPassword1\"\n              placeholder=\"Password\"\n              formControlName=\"password\"\n\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputConfirmPassword1\">Confirm Password</label>\n            <input\n              type=\"password\"\n              class=\"form-control\"\n              id=\"exampleInputConfirmassword1\"\n              placeholder=\"confirmPassword\"\n              formControlName=\"confirmPassword\"\n            />\n          </div>\n          <div\n          class=\"alert alert-danger\"\n          *ngIf=\"confirmPassword.errors?.matchPassword\">\n            Password not match\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signUp()\">Sign Up</button>\n        </fieldset>\n      </form>\n\n      </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            confirmPassword: this.confirmPassword
        }, {
            validators: this.confirmValidator
        });
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.signUp(this.signUpForm.value).subscribe(function (data) {
            console.log("d", data);
            _this.toastr.successToastr("signUp successfully");
            _this.router.navigateByUrl("/login");
        }, function (errors) {
            for (var _i = 0, _a = errors.error.modelstate[""]; _i < _a.length; _i++) {
                var ms = _a[_i];
                _this.toastr.errorToastr(ms);
            }
        });
    };
    SignUpComponent.prototype.confirmValidator = function (ac) {
        var password = ac.get("password").value;
        var confirmPassword = ac.get("confirmPassword").value;
        if (password && confirmPassword) {
            if (password != confirmPassword) {
                ac.get("confirmPassword").setErrors({ matchPassword: true });
            }
        }
        else {
            return null;
        }
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\anguler js\angular L\finalProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map