import {PanelConfig} from "./panel.config";
import {Version} from "../model/version";
import {Translations} from "./translation.config";
import {Rule} from "../model/rule";
import {FormType} from "./FormType";
import {DYNAMIC_TYPE} from "@angular/compiler/src/output/output_ast";

export class FormConfig {
    title:string;
    version:Version;
    type:FormType;
    // TODO : ?add audit trail stuff...
    rules: Rule[];   // called if any fields within form change.
    panels:PanelConfig[];
    layout:string;  //ignore for now...
    translations:Translations;
}
