import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {RestService} from "./rest.service";
import {State} from "../model/state";
import {Observable} from "rxjs";

@Injectable()
export class StateService extends RestService<State> {

    state:State;

    constructor(public _http: Http) {
        super(_http);
        this.withUrl('/state');
    }

    public load(id:string) {
        // check the cache. make sure it's the same id. etc...

        // if cache[stateId] return it....asObservable() otherwise load a new one...
        // this.state = state;
        return super.get({stateId:id});
    }

    public transition(event:string) {
//        this.state.getCurrent();
        var next = this.state.stateTable.transition("", event);
        return next;
    }

}