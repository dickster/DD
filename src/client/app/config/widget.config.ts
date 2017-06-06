
export class WidgetConfig<T> {
    value: T;
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

    // NOTE : validators, asyncValidators & showWhen moved to BizRules.


    constructor(options: {
        value?: T,
            key?: string,
            label?: string,
            placeholder?:string,
            required?: boolean,
            labelKey?: string,
            labelWidth?: number,
            width?: number,
            offset?: number,
            order?: number,
            css?: string,
            type?: string,
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        this.css = options.css || '';
        this.width = options.width || 6;
        this.offset = options.offset || 0;
        this.labelWidth = options.labelWidth || 6;
        this.labelKey = options.labelKey || this.label;
        this.placeholder = options.placeholder || '';
    }

}