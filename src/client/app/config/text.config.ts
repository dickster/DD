import { WidgetConfig } from './widget.config';
import {BizRule} from "../model/biz.rule";

export class TextConfig extends WidgetConfig<string> {
    type = 'text';
    inputType : string;
    placeholder : string;

    constructor(options: {
        key: string,
        type: string,
        inputType?: string,
        placeholder?:string,
        value?: string,
        label?: string,
        required?: boolean,
        labelKey?: string,
        labelWidth?: number,
        bizRules?:BizRule[],
        width?: number,
        offset?: number,
        rememberAs?:string,
        order?: number,
        css?: string,
    }) {
        super(options);
        this.inputType = options.inputType || 'text';
        this.placeholder = options.placeholder;
    }
}
