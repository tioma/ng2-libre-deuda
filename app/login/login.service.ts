/**
 * Created by Artiom on 28/06/2016.
 */
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { LocalStorage, SessionStorage } from "../../node_modules/angular2-localstorage/WebStorage";

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor(
        private http: Http,
        @Inject('ApiEndpoint') private apiEndpoint: string
    ){}

    @LocalStorage() private token:string = '';

    isLoggedIn(){
        return this.token != '';
    }

    login(user) {
        let loginUrl = this.apiEndpoint + '/login';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(loginUrl, user, options)
                    .map(this.extractData)
                    .catch(this.handleError);

    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    logout(){
        this.token = '';
    }
}