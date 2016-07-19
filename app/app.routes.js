"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var libreDeuda_component_1 = require('./libreDeuda/libreDeuda.component');
var containers_component_1 = require('./containers/containers.component');
var authGuard_1 = require('./authGuard');
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'libre-deuda', component: libreDeuda_component_1.LibreDeudaComponent, canActivate: [authGuard_1.AuthGuard], children: [
            { path: '' },
            { path: 'new-container', component: containers_component_1.ContainerComponent }
        ] },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes),
    authGuard_1.authProviders
];
//# sourceMappingURL=app.routes.js.map