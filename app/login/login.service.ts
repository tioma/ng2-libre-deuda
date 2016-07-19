/**
 * Created by Artiom on 28/06/2016.
 */
import { Injectable, Inject } from '@angular/core';
import { ExtHttp } from '../extHttp';
import { Router } from '@angular/router';

import { IdentityService } from './identity.service';

import { LocalStorage, SessionStorage } from "../../node_modules/angular2-localstorage/WebStorage";

@Injectable()
export class LoginService{
    constructor(
        private router: Router,
        private http: ExtHttp,
        private identityService: IdentityService,
        @Inject('ApiEndpoint') private apiEndpoint: string
    ){}

    @LocalStorage() public userName:string = '';

    isLoggedIn(){
        return this.identityService.getToken() != '';
    }

    loginSuccess(token, userName, rememberUser){
        this.identityService.setToken(token, rememberUser);
        this.userName = userName;
        this.router.navigate(['/libre-deuda']);
    }

    login(user) {
        let loginUrl = this.apiEndpoint + '/login';

        return this.http.post(loginUrl, user, false)
                    .map(this.http.extractData)
                    .catch(this.http.handleError);
    }

    logout(){
        this.identityService.removeToken();
        this.userName = '';
    }
}