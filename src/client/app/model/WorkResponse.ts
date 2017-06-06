
import {ValidationLevel} from "./ValidationLevel";

export class WorkResponse {
    level: ValidationLevel;
    code: number;
    msg: string;
    user:string;
    time:number;
    content:any;
}
