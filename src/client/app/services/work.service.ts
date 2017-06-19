
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import {RestService} from "./rest.service";
import {State} from "../model/work";


@Injectable()
export class WorkService extends RestService<State> {
    constructor(public _http: Http  ) {
        super(_http);
        this.withUrl('/work');
    }




}