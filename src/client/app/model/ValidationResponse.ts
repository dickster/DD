
import {ValidationLevel} from "./ValidationLevel";

export class ValidationResponse {
    level: ValidationLevel;
    code: number;
    msg: string;
    user:string;
    time:number;
    content:any;
}
