import {DocId} from "./doc.id";

import {FormId} from "./form.id";
import {ValidationResponse} from "./validation.response";
import {Policy} from "./policy";
import {StateTable} from "./state.table";

export class State {

    // when doing a quote, you will be working with a series of similar policies.  each having a few parameters changed
    // with a different total cost (presumably).
    // this is handled by having different major versions of the policy.
    //  e.g. Policy Id = 705.   version = {major:1, minor:3}
    //       Policy Id = 705.   version = {major:2, minor:6}
    // basically, whenever the code hits the backend and gets a new cost, it should increment the major version of the policy.
    policy:DocId[];  // the most recent (largest version #) is the active one.


    user:string;
    created:Date;
    modified:Date;
    status:string;
    locale:string; //nullable default = 'en';
    lastResponse:ValidationResponse;
    visited:FormId[];  // the current state (if any) is the last one.

    // this is never changed! immutable.
    // this should be "stamped"/embedded in here on creation time and never changed after.
    stateTable:StateTable;

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