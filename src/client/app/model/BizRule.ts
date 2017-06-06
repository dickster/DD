
import {WorkResponse} from "./WorkResponse";
export class BizRule {
    // maybe have to add valueChanges listener to every field!!!! whaaaa?
    // if the field is null, then it applies to the entire form.
    field:string; // e.g. "first time insured?" or "downpayment amount"
    display:string; // e.g isVisible() { return(previousInsurer==null) }
    validation:string;
    // typically submit will be disabled if any validator returns ValidationLevel:ERROR.
    errorResponse: WorkResponse;
    // help text will be shown if has-warning
    // each component will have a [class.hasWarning] = hasWarning(widget.validation.level==WARNING),
    //                            [class.hasError] = hasError(widget.validation.level==ERROR)   etc...
}
