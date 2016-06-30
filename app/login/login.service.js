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
var http_1 = require('@angular/http');
var WebStorage_1 = require("../../node_modules/angular2-localstorage/WebStorage");
var Observable_1 = require('rxjs/Observable');
var LoginService = (function () {
    function LoginService(http, apiEndpoint) {
        this.http = http;
        this.apiEndpoint = apiEndpoint;
        this.token = '';
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.token != '';
    };
    LoginService.prototype.login = function (user) {
        var loginUrl = this.apiEndpoint + '/login';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(loginUrl, user, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body.data || {};
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService.prototype.logout = function () {
        this.token = '';
    };
    __decorate([
        WebStorage_1.LocalStorage(), 
        __metadata('design:type', String)
    ], LoginService.prototype, "token", void 0);
    LoginService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint')), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map