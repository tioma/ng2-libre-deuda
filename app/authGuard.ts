/**
 * Created by kolesnikov-a on 18/07/2016.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { IdentityService } from './login/identity.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private identityService: IdentityService,
        private router: Router
    ){};

    canActivate(){
        console.log(this.identityService.getToken());
        if (this.identityService.getToken()) return true;
        this.router.navigate(['/login']);
        return false;
    }
}

export const authProviders = [AuthGuard, IdentityService];