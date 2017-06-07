import {PanelConfig} from "./pane.config";
import {Version} from "../model/version";
import {Translations} from "./translation.config";

export class FormConfig {
    title:string;
    version:Version;
    // audit trail stuff...
    panels:PanelConfig[];
    layout:string;  //ignore for now...
    translations:Translations;
}
