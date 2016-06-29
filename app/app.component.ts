/**
 * Created by kolesnikov-a on 22/06/2016.
 */
import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
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

export class AppComponent {
    constructor(
        private loginService: LoginService
    ){};
    isLoggedIn(){
        return this.loginService.isLoggedIn();
    }
}