import {Version} from "./Version";
import {PanelConfig} from "./PanelConfig";

export class FormConfig {
    title:string;
    version:Version;
    // audit trail stuff...
    panels:PanelConfig[];
    layout:string;  //ignore for now...

}
