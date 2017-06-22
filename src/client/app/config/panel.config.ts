
import {RowConfig} from "./row.config";
import {Rule} from "../model/rule";

export class PanelConfig {
    type:string;  // tab panel etc...
    rows:RowConfig[];
    rules:Rule[];  // these validations occur if any of contained inputs change.
}
