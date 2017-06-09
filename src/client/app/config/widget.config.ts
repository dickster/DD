
import {BizRule} from "../model/biz.rule";
export class WidgetConfig<T> {
    value: T;           // default value.
    key: string;
    type: string;

    label: string;
    labelKey?:string;   // if null, default it to label.  useful for when the label is really long
                        // or you need a unique identifier for the same label.
    // layout...
    labelWidth:number;
    width:number;
    offset:number;
    // ....
    required: boolean;
    order: number;
    css: string;
    placeholder:string;
    rememberAs:string;

    bizRules: BizRule[];


    constructor(options: {
            key: string,
            type: string,
            value?: T,
            label?: string,
            placeholder?:string,
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
        this.key = options.key;
        this.type = options.type;
        this.value = options.value;
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order ? options.order : 1;
        this.css = options.css || '';
        this.width = options.width || 6;
        this.offset = options.offset || 0;
        this.labelWidth = options.labelWidth || 6;
        this.labelKey = options.labelKey || this.label;
        this.placeholder = options.placeholder || '';
        this.bizRules = options.bizRules || [];
        this.rememberAs = options.rememberAs;   // add change listener.  set rememory[key]=value.

        // if async validators added, handle them myself?   i.e. after 400MS, call any queued up validators
        // when data is dirty.
    }

}