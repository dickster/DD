
import {FormKey} from "./FormKey";

class WorkContext {    // e.g. AutoContext (version2017)
    stateCharts: {[key:string]:{[state:number]:FormKey}}; //formKey-->map(state, formKey)
    forms:{[key:string]:FormKey};   // key-->{formId,version};   e.g.   'CMF' --> '{64,2.0}'
    bizRules: {}; // formKey-->Set<BizRule>
    endPoint:string;// base url to submit to.   e.g. ../{{lob}}    passes Work Id & Policy.
    lob:string;
}

