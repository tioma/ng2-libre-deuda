/**
 * Created by kolesnikov-a on 11/07/2016.
 */
import { Injectable } from '@angular/core';

import { LocalStorage, SessionStorage } from "../../node_modules/angular2-localstorage/WebStorage";

@Injectable()
export class IdentityService {

    @LocalStorage() private token: string = '';
    @SessionStorage() private sessionToken: string = '';

    getToken(){
        if (this.token != ''){
            return this.token;
        } else {
            return this.sessionToken;
        }
    }

    setToken(token, rememberUser){
        if (rememberUser){
            this.token = token;
        } else {
            this.sessionToken = token;
        }
    }

    removeToken(){
        this.token = '';
        this.sessionToken = '';
    }

}