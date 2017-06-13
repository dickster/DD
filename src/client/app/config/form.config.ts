import {PanelConfig} from "./panel.config";
import {Version} from "../model/version";
import {Translations} from "./translation.config";
import {BizRule} from "../model/biz.rule";

export class FormConfig {
    title:string;
    version:Version;
    // audit trail stuff...
    bizRules: BizRule[];   // called if any fields within form change.
    panels:PanelConfig[];
    layout:string;  //ignore for now...
    translations:Translations;
}
