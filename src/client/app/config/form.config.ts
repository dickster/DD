import {Version} from "../model/Version";
import {PanelConfig} from "../model/PanelConfig";

export class FormConfig {
    title:string;
    version:Version;
    // audit trail stuff...
    panels:PanelConfig[];
    layout:string;  //ignore for now...

}
