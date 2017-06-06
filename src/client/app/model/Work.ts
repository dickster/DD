import {DocKey} from "./DocKey";

import {FormKey} from "./FormKey";
import {ValidationResponse} from "./WorkResponse";
import {WorkStatus} from "./WorkStatus";

export class Work {
    // policy:{id:number, version:Version}  // assumes the LARGEST revision of this policy if version empty.
    // for quotes, using the version number is useful.
    // then you can think of a quote as collection of Work items.  you can compare the policies and their different results very easily.
    //  think of the easy mongo queries...findPolicyById([quoteIds]).orderByTotalCost(); etc...
    // maybe have policy be a collection of policies? but can each have a different state? or is currentState irrelevant?
    policy:DocKey[]|DocKey;
    user:string;
    created:Date;
    modified:Date;
    status:WorkStatus|string;
    lastResponse:ValidationResponse;
    currentState:FormKey; /*nullable*/
    context:DocKey[]; //contextId&version;
    desc:string;// get pertinent info from policy and store it here.   e.g. "John Doe Auto Policy,
    // this will be generated by default but can be overridden by user.
}





// use JSON patch as diff tool!!! FUCKING AMAZING.


//java
class WorkRepository {
    // save(Integer workId, Policy... policies) {
//     formRepository.saveAll(policies);
//     work = findById(workId);
//     updateStateAndDesc(work,policy);
//     save(work);
//    return work.state;
}



enum ValidationLevel {
    ERROR,WARNING,SUCCESS
}

class BizRule {
    // maybe have to add valueChanges listener to every field!!!! whaaaa?
    // if the field is null, then it applies to the entire form.
    field:string; // e.g. "first time insured?" or "downpayment amount"
    display:string; // e.g isVisible() { return(previousInsurer==null) }
    validation:string;
    // typically submit will be disabled if any validator returns ValidationLevel:ERROR.
    errorResponse: {level:ValidationLevel, code:number; msg:string; /*user:string; time:number;*/};
    // help text will be shown if has-warning
    // each component will have a [class.hasWarning] = hasWarning(widget.validation.level==WARNING),
    //                            [class.hasError] = hasError(widget.validation.level==ERROR)   etc...
}


// SKIP the layout handler shit.   can do that later.  just do labelOverInput for now.

// how to handle BizRule that crosses multiple fields???
// leave field blank;

class FormConfig {
    // groups/rows/cols/label&widget
    // cols not needed? implied by labeloverInput widgets.  defined by labelBesideWidget
}

class ColConfig {
    // offset,pull?  applied only label in LabelBesideInput layout.
    // widgets[];
}



// TODO : cloning a Work/Policy to start a new one.
// e.g. a year later when someone needs to renew a policy or start a new one on a second car...

