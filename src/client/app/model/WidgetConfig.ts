
export class WidgetConfig<T> {
    value: T;
    key: string;
    type: string;

    label: string;
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
        this.placeholder = options.placeholder || '';
    }

}