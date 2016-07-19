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
 * Created by kolesnikov-a on 18/07/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var identity_service_1 = require('./login/identity.service');
var AuthGuard = (function () {
    function AuthGuard(identityService, router) {
        this.identityService = identityService;
        this.router = router;
    }
    ;
    AuthGuard.prototype.canActivate = function () {
        console.log(this.identityService.getToken());
        if (this.identityService.getToken())
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [identity_service_1.IdentityService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
exports.authProviders = [AuthGuard, identity_service_1.IdentityService];
//# sourceMappingURL=authGuard.js.map