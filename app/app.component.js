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
 * Created by kolesnikov-a on 22/06/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var login_component_1 = require('./login/login.component');
var login_service_1 = require('./login/login.service');
var container_service_1 = require('./libreDeuda/container.service');
var extHttp_1 = require('./extHttp');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    ;
    AppComponent.prototype.getUserName = function () {
        return this.loginService.userName;
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [
                login_service_1.LoginService,
                container_service_1.ContainerService,
                extHttp_1.ExtHttp
            ],
            precompile: [login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map