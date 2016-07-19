/**
 * Created by kolesnikov-a on 05/07/2016.
 */
import { Injectable, Inject } from '@angular/core';

//import { Observable } from 'rxjs/Observable';
import {ExtHttp} from "../extHttp";

@Injectable()
export class ContainerService {
    constructor(
        private http: ExtHttp,
        @Inject('ApiEndpoint') private apiEndpoint: string
    ){}

    getContainers() {
        let containersUrl = this.apiEndpoint + '/lde';

        return this.http.get(containersUrl, true)
            .map(this.http.extractData)
            .catch(this.http.handleError);
    }

}