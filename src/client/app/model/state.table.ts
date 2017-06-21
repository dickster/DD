
import {FormId} from "./form.id";
import {BizRule} from "./biz.rule";
import {Endpoint} from "./endpoint";
import {Version} from "./version";

export class StateTable {    // e.g. AutoContext (version2017)
    version:Version;
    lob:string;
    stateTable: {[key:string] : {[state:string]:FormId}};
    forms:{[key:string]:FormId};
    // can this be in the button config??  each submitConfig has an Endpoint. maybe use this definition
    // if button config doesn't have endpoint.
    endpoint?:Endpoint;// base url to submit to.   e.g. ../{{lob}}    passes Work Id & Policy.
    comments?:string;

    transition(form:string, event:string):FormId {
        return this.stateTable[form][event];
    }

}



