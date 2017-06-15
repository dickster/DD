import { Validator, FormControl } from '@angular/forms';
import {BizRule} from "../model/biz.rule";

export class ExpressionValidator implements Validator {
    private bizRules:BizRule[];

    constructor(bizRules:BizRule[]) {
        this.bizRules = bizRules;
    }

    validate(c: FormControl): { [key: string]: any } {
        // need access to widgets BizRules.
        // get expression, eval it return result.
        return null;  //success.
    }

}


// CustomValidator implements Validator {
//     validate(c:FormControl)
//      {
//      }
// }




