/**
 * Created by kolesnikov-a on 16/06/2016.
 */
"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var LocalStorageEmitter_1 = require('angular2-localstorage/LocalStorageEmitter');
var app_routes_1 = require('./app.routes');
var identity_service_1 = require("./login/identity.service");
//import { DefaultRequestOptions } from './defaultRequestOptions';
var appPromise = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    identity_service_1.IdentityService,
    app_routes_1.appRouterProviders,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    core_1.provide('ApiEndpoint', { useValue: 'https://10.10.0.223:8086' }),
    //provide(RequestOptions, { useClass: DefaultRequestOptions }),
    //provide('ApiEndpoint', { useValue: 'http://www.puertobuenosaires.gob.ar:8090'}),
    http_1.HTTP_PROVIDERS,
    LocalStorageEmitter_1.LocalStorageService
]).catch(function (err) { return console.error(err); });
LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
//# sourceMappingURL=main.js.map