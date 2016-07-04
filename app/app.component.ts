/**
 * Created by kolesnikov-a on 22/06/2016.
 */
import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { LibreDeudaComponent } from './libreDeuda/libreDeuda.component';

import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
    {
        path: '/libreDeuda',
        name: 'LibreDeuda',
        component: LibreDeudaComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        LoginService
    ]
})

export class AppComponent implements OnInit{
    constructor(
        private router: Router,
        private loginService: LoginService
    ){};

    getUserName(){
        return this.loginService.userName;
    }

    ngOnInit(){
        if (!this.isLoggedIn()) this.router.navigate(['Login']);
    }

    isLoggedIn(){
        return this.loginService.isLoggedIn();
    }

    logout(){
        this.loginService.logout();
        this.router.navigate(['Login']);
    }
}