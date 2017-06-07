import {ValidationResponse} from "./validation.response";
export class AsyncValidator {
    name:string;
    parameters:string[];
    url:string;  // if null, uses default validator with {{name}} appended.
    validationResponse: ValidationResponse;   // if null, will just use servers response. otherwise will extend with this template.
}
