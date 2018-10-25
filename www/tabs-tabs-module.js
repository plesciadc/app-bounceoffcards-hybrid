(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/generator/generator.module.ts":
/*!***********************************************!*\
  !*** ./src/app/generator/generator.module.ts ***!
  \***********************************************/
/*! exports provided: GeneratorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorPageModule", function() { return GeneratorPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _generator_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator.page */ "./src/app/generator/generator.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GeneratorPageModule = /** @class */ (function () {
    function GeneratorPageModule() {
    }
    GeneratorPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _generator_page__WEBPACK_IMPORTED_MODULE_5__["GeneratorPage"] }])
            ],
            declarations: [_generator_page__WEBPACK_IMPORTED_MODULE_5__["GeneratorPage"]]
        })
    ], GeneratorPageModule);
    return GeneratorPageModule;
}());



/***/ }),

/***/ "./src/app/generator/generator.page.html":
/*!***********************************************!*\
  !*** ./src/app/generator/generator.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Card Generator</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [scrollY]=\"false\">\n  <!--ion-grid is collapsed. It does not contain any static content. Just containers for the red indicators.-->\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[0] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[1] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[2] ? red : white\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[3] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[4] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[5] ? red : white\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[6] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[7] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[8] ? red : white\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[9] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[10] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[11] ? red : white\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[12] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[13] ? red : white\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div card-generator-cell [style.background-image]=\"cells[14] ? red : white\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-button generate-button (click)=\"generateTapped()\">Generate Card</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/generator/generator.page.scss":
/*!***********************************************!*\
  !*** ./src/app/generator/generator.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[card-generator-cell] {\n  height: 12vh;\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: 12vh;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n[generate-button] {\n  margin: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/generator/generator.page.ts":
/*!*********************************************!*\
  !*** ./src/app/generator/generator.page.ts ***!
  \*********************************************/
/*! exports provided: GeneratorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorPage", function() { return GeneratorPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneratorPage = /** @class */ (function () {
    // Initialize events reciever and subscribe to events from the settings page
    function GeneratorPage(events) {
        var _this = this;
        this.events = events;
        // Define variables
        this.cells = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.lastCells = [];
        this.red = 'url("../../assets/images/red-circle.png")';
        this.white = 'url("../../assets/images/white-circle.png")';
        this.difficultyValue = 5;
        events.subscribe('setting:changed', function (setting, value) {
            // This code will run when settings are updated
            console.log('Setting', setting, 'changed to: ', value);
            _this.difficultyValue = value;
        });
    }
    GeneratorPage.prototype.generateTapped = function () {
        var redCount = 0;
        for (var i = 0; i < this.cells.length; i++) {
            var random_boolean = Math.random() >= 0.5;
            if (random_boolean) {
                redCount++;
            }
            if (redCount > this.difficultyValue) {
                this.cells[i] = false;
            }
            else {
                this.cells[i] = random_boolean;
            }
        }
        // Loop over the cells to make sure there arent any random outliers
        for (var i = 0; i < this.cells.length; i++) {
            this.checkAdjacentCells(i);
        }
        // One last loop to check that at least two cells are red and were not matching the same pattern from the last run
        if (!this.checkTrueCells() || this.cells == this.lastCells) {
            // Restart the generateTapped() method because there were no good cells returned
            this.generateTapped();
        }
        this.lastCells = this.cells;
    };
    GeneratorPage.prototype.checkTrueCells = function () {
        var trueCells = 0;
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            if (cell) {
                trueCells++;
            }
        }
        if (trueCells >= 2) {
            return true;
        }
        else {
            return false;
        }
    };
    GeneratorPage.prototype.checkAdjacentCells = function (cellToCheck) {
        switch (cellToCheck) {
            case 0: {
                if (!this.cells[1] && !this.cells[3]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 1: {
                if (!this.cells[0] && this.cells[2] && !this.cells[4]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 2: {
                if (!this.cells[1] && !this.cells[5]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 3: {
                if (!this.cells[0] && !this.cells[4] && !this.cells[6]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 4: {
                if (!this.cells[1] && !this.cells[3] && !this.cells[5] && !this.cells[7]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 5: {
                if (!this.cells[2] && !this.cells[4] && !this.cells[8]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 6: {
                if (!this.cells[3] && !this.cells[7] && !this.cells[9]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 7: {
                if (!this.cells[4] && !this.cells[6] && !this.cells[8] && !this.cells[10]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 8: {
                if (!this.cells[5] && !this.cells[7] && !this.cells[11]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 9: {
                if (!this.cells[6] && !this.cells[10] && !this.cells[12]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 10: {
                if (!this.cells[7] && !this.cells[9] && !this.cells[11] && !this.cells[13]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 11: {
                if (!this.cells[8] && !this.cells[10] && !this.cells[14]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 12: {
                if (!this.cells[9] && !this.cells[13]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 13: {
                if (!this.cells[10] && !this.cells[12] && !this.cells[14]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            case 14: {
                if (!this.cells[11] && !this.cells[13]) {
                    this.cells[cellToCheck] = false;
                }
                break;
            }
            default: {
                console.log("Invalid column number");
                break;
            }
        }
    };
    GeneratorPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generator',
            template: __webpack_require__(/*! ./generator.page.html */ "./src/app/generator/generator.page.html"),
            styles: [__webpack_require__(/*! ./generator.page.scss */ "./src/app/generator/generator.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], GeneratorPage);
    return GeneratorPage;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"] }])
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n    <ion-list>\n        <ion-list-header style=\"padding: 10px;\">\n          Number of Balls\n        </ion-list-header>\n        <ion-item>\n            <ion-range pin=\"true\" value=\"5\" min=\"2\" max=\"8\" [(ngModel)]=\"difficultyValue\" (ngModelChange)=\"difficultyChanged()\"></ion-range>\n            <div slot=\"end\">{{difficultyValue}}</div>\n          </ion-item>\n      </ion-list>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    // Initialize events sender
    function SettingsPage(events) {
        this.events = events;
        this.difficultyValue = 5;
    }
    SettingsPage.prototype.difficultyChanged = function () {
        this.events.publish('setting:changed', 'Difficulty', this.difficultyValue);
        console.log("Sent the value");
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/settings.module */ "./src/app/settings/settings.module.ts");
/* harmony import */ var _generator_generator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generator/generator.module */ "./src/app/generator/generator.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _generator_generator_module__WEBPACK_IMPORTED_MODULE_7__["GeneratorPageModule"],
                _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab label=\"Card Generator\" icon=\"logo-buffer\" href=\"/tabs/(generator:generator)\">\n    <ion-router-outlet name=\"generator\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab label=\"Settings\" icon=\"settings\" href=\"/tabs/(settings:settings)\">\n    <ion-router-outlet name=\"settings\"></ion-router-outlet>\n  </ion-tab>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _generator_generator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator/generator.page */ "./src/app/generator/generator.page.ts");
/* harmony import */ var _settings_settings_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/settings.page */ "./src/app/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: '/tabs/(generator:generator)',
                pathMatch: 'full',
            },
            {
                path: 'generator',
                outlet: 'generator',
                component: _generator_generator_page__WEBPACK_IMPORTED_MODULE_3__["GeneratorPage"]
            },
            {
                path: 'settings',
                outlet: 'settings',
                component: _settings_settings_page__WEBPACK_IMPORTED_MODULE_4__["SettingsPage"]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(generator:generator)',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map