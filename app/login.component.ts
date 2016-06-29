/**
 * Created by Artiom on 23/06/2016.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/common';

import { LoginService } from './login.service';
//import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Component({
    selector: 'login',
    templateUrl: 'app/login.component.html',
    styleUrls: ['app/login.styles.css'],
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent {
    constructor(
        private loginService: LoginService
    ){};

    public model = {
        username: '',
        password: ''
    };

    //here happens the magic. `rememberMe` is always restored from the localstorage when you reload the site
    public rememberMe:boolean = false;

    login(){
        console.log(this.model);
        this.loginService.login(this.model)
            .then(data => console.log(data));
    }

}