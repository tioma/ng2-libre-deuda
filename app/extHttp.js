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
 * Created by kolesnikov-a on 05/07/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('../node_modules/rxjs/Observable');
var identity_service_1 = require('./login/identity.service');
var ExtHttp = (function () {
    function ExtHttp(http, identityService) {
        this.http = http;
        this.identityService = identityService;
    }
    ;
    ExtHttp.prototype.getAuthHeaders = function () {
        var authToken;
        authToken = this.identityService.getToken();
        console.log(authToken);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'token': this.identityService.getToken()
        });
        return new http_1.RequestOptions({ headers: headers });
    };
    ExtHttp.prototype.getNormalHeaders = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return new http_1.RequestOptions({ headers: headers });
    };
    ExtHttp.prototype.getHeaders = function (auth) {
        if (auth) {
            return this.getAuthHeaders();
        }
        else {
            return this.getNormalHeaders();
        }
    };
    ExtHttp.prototype.get = function (url, auth) {
        var requestOptions = this.getHeaders(auth);
        return this.http.get(url, requestOptions);
    };
    ExtHttp.prototype.post = function (url, data, auth) {
        var requestOptions = this.getHeaders(auth);
        return this.http.post(url, data, requestOptions);
    };
    ExtHttp.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ExtHttp.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.log(error);
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ExtHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, identity_service_1.IdentityService])
    ], ExtHttp);
    return ExtHttp;
}());
exports.ExtHttp = ExtHttp;
//# sourceMappingURL=extHttp.js.map