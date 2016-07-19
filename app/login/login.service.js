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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Artiom on 28/06/2016.
 */
var core_1 = require('@angular/core');
var extHttp_1 = require('../extHttp');
var router_1 = require('@angular/router');
var identity_service_1 = require('./identity.service');
var WebStorage_1 = require("../../node_modules/angular2-localstorage/WebStorage");
var LoginService = (function () {
    function LoginService(router, http, identityService, apiEndpoint) {
        this.router = router;
        this.http = http;
        this.identityService = identityService;
        this.apiEndpoint = apiEndpoint;
        this.userName = '';
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.identityService.getToken() != '';
    };
    LoginService.prototype.loginSuccess = function (token, userName, rememberUser) {
        this.identityService.setToken(token, rememberUser);
        this.userName = userName;
        this.router.navigate(['/libre-deuda']);
    };
    LoginService.prototype.login = function (user) {
        var loginUrl = this.apiEndpoint + '/login';
        return this.http.post(loginUrl, user, false)
            .map(this.http.extractData)
            .catch(this.http.handleError);
    };
    LoginService.prototype.logout = function () {
        this.identityService.removeToken();
        this.userName = '';
    };
    __decorate([
        WebStorage_1.LocalStorage(), 
        __metadata('design:type', String)
    ], LoginService.prototype, "userName", void 0);
    LoginService = __decorate([
        core_1.Injectable(),
        __param(3, core_1.Inject('ApiEndpoint')), 
        __metadata('design:paramtypes', [router_1.Router, extHttp_1.ExtHttp, identity_service_1.IdentityService, String])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map