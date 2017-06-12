
import {RowConfig} from "./row.config";
import {BizRule} from "../model/biz.rule";

export class PanelConfig {
    type:string;  // tab panel etc...
    rows:RowConfig[];
    bizRules:BizRule[];  // these validations occur if any of contained inputs change.
}
