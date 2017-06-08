import {ValidationResponse} from "./validation.response";
import {Endpoint} from "./endpoint";

export class AsyncValidator extends Endpoint {
    private msgs:{[code:string]:string};  // nullable.

    constructor(name:string,msgs:{[code:string]:string},parameters?:string[],base?:string) {
        super(name, parameters, base);
        this.msgs = msgs;
    }


    // fold this into RestService class so they both exist at once.
}

