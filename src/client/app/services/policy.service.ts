import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import {RestService} from "./rest.service";
import {Policy} from "../model/Policy";

@Injectable()
export class PolicyService extends RestService<Policy> {

    constructor(public _http: Http) {
        super(_http);
        this.withUrl('/policy');
    }

}
