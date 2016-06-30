/**
 * Created by kolesnikov-a on 16/06/2016.
 */

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }   from './app.component';
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

var appPromise = bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    provide('ApiEndpoint', { useValue: 'https://10.10.0.223:8086'}),
    HTTP_PROVIDERS,
    LocalStorageService
]).catch((err: any) => console.error(err));

LocalStorageSubscriber(appPromise);