

import {ValidationLevel} from "./validation.level";

export class ValidationResponse {
    // TODO :ensure that all (client & serverside) validators follow this convention for responses.
    level: ValidationLevel;
    code: number;
    msg: string;
    user:string;
    time:number;
    content:any;
    isValid:boolean;
}
