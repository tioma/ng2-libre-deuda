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
var router_deprecated_1 = require('@angular/router-deprecated');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var login_component_1 = require('./login/login.component');
var login_service_1 = require('./login/login.service');
var libreDeuda_component_1 = require('./libreDeuda/libreDeuda.component');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        if (!this.isLoggedIn())
            this.router.navigate(['Login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['Login']);
    };
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent,
                useAsDefault: true
            },
            {
                path: '/libreDeuda',
                name: 'LibreDeuda',
                component: libreDeuda_component_1.LibreDeudaComponent
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                login_service_1.LoginService
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, login_service_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map