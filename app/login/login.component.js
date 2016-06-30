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
 * Created by Artiom on 23/06/2016.
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var login_service_1 = require('./login.service');
//import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.model = {
            username: '',
            password: ''
        };
        //here happens the magic. `rememberMe` is always restored from the localstorage when you reload the site
        this.rememberMe = false;
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        if (this.loginService.isLoggedIn())
            this.router.navigate(['LibreDeuda']);
    };
    ;
    LoginComponent.prototype.login = function () {
        console.log(this.model);
        this.loginService.login(this.model)
            .subscribe(function (loggedUser) { return console.log(loggedUser); }, function (error) { return console.log(error); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login/login.component.html',
            styleUrls: ['app/login/login.styles.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map