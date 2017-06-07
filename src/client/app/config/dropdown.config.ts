import { WidgetConfig } from './widget.config';
import {DocId} from "../model/doc.id";


export class DropDownConfig extends WidgetConfig<string> {
    type = 'dropdown';
    // if it's a string, assume it's a Rest endpoint to retrieve choices map.  or could read from database directly.
    choices: {[key: string]:string}|DocId|string;

    constructor(options: {choices:{[key:string]:string}}) {
        super(options);
        this.choices = options.choices || {};
    }
}
