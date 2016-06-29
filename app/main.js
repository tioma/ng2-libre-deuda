/**
 * Created by kolesnikov-a on 16/06/2016.
 */
"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
//import { HTTP_PROVIDERS } from '@angular/http';
var app_component_1 = require('./app.component');
//import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]).catch(function (err) { return console.error(err); });
//LocalStorageSubscriber(appPromise); 
//# sourceMappingURL=main.js.map