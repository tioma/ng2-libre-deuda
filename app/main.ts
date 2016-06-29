/**
 * Created by kolesnikov-a on 16/06/2016.
 */

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }   from './app.component';
//import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
    //HTTP_PROVIDERS
]).catch((err: any) => console.error(err));

//LocalStorageSubscriber(appPromise);