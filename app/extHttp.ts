/**
 * Created by kolesnikov-a on 05/07/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from '../node_modules/rxjs/Observable';
import { IdentityService } from './login/identity.service';

@Injectable()
export class ExtHttp {

    constructor(
        private http: Http,
        private identityService: IdentityService
    ){};

    getAuthHeaders(){
        let authToken: string;

        authToken = this.identityService.getToken();

        console.log(authToken);
        let headers:Headers = new Headers({
            'Content-Type': 'application/json',
            'token': this.identityService.getToken()
        });

        return new RequestOptions({ headers: headers});
    }

    getNormalHeaders(){
        let headers:Headers = new Headers({
            'Content-Type': 'application/json'
        });

        return new RequestOptions({ headers: headers});
    }

    private getHeaders(auth){
        if (auth){
            return this.getAuthHeaders();
        } else {
            return this.getNormalHeaders();
        }
    }

    get(url, auth){
        let requestOptions = this.getHeaders(auth);
        return this.http.get(url, requestOptions);
    }

    post(url, data, auth){
        let requestOptions = this.getHeaders(auth);
        return this.http.post(url, data, requestOptions);
    }

    extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.log(error);
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}