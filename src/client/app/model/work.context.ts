
import {FormId} from "./form.id";
import {BizRule} from "./biz.rule";

class WorkflowDefinition {    // e.g. AutoContext (version2017)
    startState:FormId;
    stateCharts: {[key:string]:{[state:string]:FormId}};
    forms:{[key:string]:FormId};
    controller:string;// base url to submit to.   e.g. ../{{lob}}    passes Work Id & Policy.
    lob:string;
    //version/revision:Version
}

// maybe have a template for this and create a new instance for every work/policy/quote whatever you call it.

// WorkflowDefinition {
//     this context stuff...
// }


