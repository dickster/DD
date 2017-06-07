import {ValidationResponse} from "./validation.response";
import {Endpoint} from "./endpoint";

export class AsyncValidator extends Endpoint {
    validationResponse: ValidationResponse;   // if null, will just use servers response. otherwise will extend with this template.
    constructor({name:string,
}
