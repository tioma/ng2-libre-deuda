/**
 * Created by kolesnikov-a on 22/06/2016.
 */
import { Component } from '@angular/core';

import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ContainerService } from './libreDeuda/container.service';
import { IdentityService } from './login/identity.service';
import { ExtHttp } from './extHttp';

import { LibreDeudaComponent } from './libreDeuda/libreDeuda.component';
import { ContainerComponent } from './containers/containers.component';

import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DROPDOWN_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [
        LoginService,
        ContainerService,
        ExtHttp
    ],
    precompile: [LoginComponent]
})

export class AppComponent {
    constructor(
        private router: Router,
        private loginService: LoginService
    ){};

    getUserName(){
        return this.loginService.userName;
    }

    isLoggedIn(){
        return this.loginService.isLoggedIn();
    }

    logout(){
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
