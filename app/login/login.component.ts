/**
 * Created by Artiom on 23/06/2016.
 */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { LocalStorage } from "angular2-localstorage/WebStorage";

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.styles.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private loginService: LoginService
    ){};

    ngOnInit(){
        if (this.loginService.isLoggedIn()) this.router.navigate(['/libre-deuda']);
    };

    public model = {
        USUARIO: '', //dreyes@puertobuenosaires.gob.ar
        CLAVE: '', //123456
        session: false
    };

    //here happens the magic. `rememberMe` is always restored from the localstorage when you reload the site
    public rememberMe:boolean = false;

    login(){
        console.log(this.model);
        this.loginService.login(this.model)
            .subscribe(
                loggedUser => {
                    this.loginService.loginSuccess(loggedUser, this.model.USUARIO, this.model.session);
                    //this.router.navigate(['/libre-deuda'])
                },
                error => console.log(error));
    }

}