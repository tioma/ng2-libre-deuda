"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by kolesnikov-a on 11/07/2016.
 */
var core_1 = require('@angular/core');
var WebStorage_1 = require("../../node_modules/angular2-localstorage/WebStorage");
var IdentityService = (function () {
    function IdentityService() {
        this.token = '';
        this.sessionToken = '';
    }
    IdentityService.prototype.getToken = function () {
        if (this.token != '') {
            return this.token;
        }
        else {
            return this.sessionToken;
        }
    };
    IdentityService.prototype.setToken = function (token, rememberUser) {
        if (rememberUser) {
            this.token = token;
        }
        else {
            this.sessionToken = token;
        }
    };
    IdentityService.prototype.removeToken = function () {
        this.token = '';
        this.sessionToken = '';
    };
    __decorate([
        WebStorage_1.LocalStorage(), 
        __metadata('design:type', String)
    ], IdentityService.prototype, "token", void 0);
    __decorate([
        WebStorage_1.SessionStorage(), 
        __metadata('design:type', String)
    ], IdentityService.prototype, "sessionToken", void 0);
    IdentityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], IdentityService);
    return IdentityService;
}());
exports.IdentityService = IdentityService;
//# sourceMappingURL=identity.service.js.map