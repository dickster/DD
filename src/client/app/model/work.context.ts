
import {FormId} from "./form.id";
import {BizRule} from "./biz.rule";

class WorkContext {    // e.g. AutoContext (version2017)
    stateCharts: {[key:string]:{[state:number]:FormId}};
    forms:{[key:string]:FormId};
    controller:string;// base url to submit to.   e.g. ../{{lob}}    passes Work Id & Policy.
    lob:string;
}

