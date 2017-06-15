import {DocId} from "./doc.id";

import {FormId} from "./form.id";
import {ValidationResponse} from "./validation.response";
import {WorkStatus} from "./work.status";

export class Workflow {
    // policy:{id:number, version:Version}  // assumes the LARGEST revision of this policy if version empty.
    // for quotes, using the version number is useful.
    // then you can think of a quote as collection of Work items.  you can compare the policies and their different results very easily.
    //  think of the easy mongo queries...findPolicyById([quoteIds]).orderByTotalCost(); etc...
    // maybe have policy be a collection of policies? but can each have a different state? or is currentState irrelevant?

    currentPolicy:number;  // return policy[currentPolicy];
    policy:DocId[];  // WORM.  can't change after you add.   can

    // state.
    user:string;
    created:Date;
    modified:Date;
    status:WorkStatus|string;
    locale:string; //nullable default = 'en';
    lastResponse:ValidationResponse;
    visitedStates:FormId[];  // the current state (if any) is the last one.

    // this is never changed! immutable.
    workflowDefinition:DocId[]; //contextId&version;

    // this will be generated by default but can be overridden by user.
    /* transient?*/ desc:string;// get pertinent info from policy and store it here.   e.g. "John Doe Auto Policy,
}


// use JSON patch as diff tool!!! FUCKING AMAZING.
// still need to resolve key->values.
// form.control.value=CSIO:2, form.control.textValue = 'COPPER'
// this can be looked up via widgetConfig.

//java
class WorkRepository {
    // save(Integer workId, Policy... policies) {
//     formRepository.saveAll(policies);
//     work = findById(workId);
//     updateStateAndDesc(work,policy);
//     save(work);
//    return work.state;
}


// SKIP the layout handler shit.   can do that later.  just do labelOverInput for now.
