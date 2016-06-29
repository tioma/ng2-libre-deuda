/**
 * Created by Artiom on 28/06/2016.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private loggedIn: boolean = false;

    isLoggedIn(){
        return this.loggedIn;
    }

    login(user) {
        console.log(user);
        let mockResponse = {
            status: 'OK',
            user: user
        };
        return Promise.resolve(mockResponse);
    }
}