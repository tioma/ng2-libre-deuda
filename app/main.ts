/**
 * Created by kolesnikov-a on 16/06/2016.
 */

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, RequestOptions } from '@angular/http';

import { AppComponent }   from './app.component';
import { LocalStorageService, LocalStorageSubscriber } from 'angular2-localstorage/LocalStorageEmitter';

import { appRouterProviders } from './app.routes';
import {IdentityService} from "./login/identity.service";

//import { DefaultRequestOptions } from './defaultRequestOptions';

var appPromise = bootstrap(AppComponent, [
    IdentityService,
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    provide('ApiEndpoint', { useValue: 'https://10.10.0.223:8086'}),
    //provide(RequestOptions, { useClass: DefaultRequestOptions }),
    //provide('ApiEndpoint', { useValue: 'http://www.puertobuenosaires.gob.ar:8090'}),
    HTTP_PROVIDERS,
    LocalStorageService
]).catch((err: any) => console.error(err));

LocalStorageSubscriber(appPromise);