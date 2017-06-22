import { Validator, FormControl } from '@angular/forms';
import {Rule} from "../model/rule";

export class ExpressionValidator implements Validator {
    private rules:Rule[];

    constructor(rules:Rule[]) {
        this.rules = rules;
    }

    validate(c: FormControl): { [key: string]: any } {
        // need access to widgets BizRules.
        // get expression, eval it return result.
        return null;  //success.
    }

}

