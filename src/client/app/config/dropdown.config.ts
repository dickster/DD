import { WidgetConfig } from './widget.config';


export class DropDownConfig extends WidgetConfig<string> {
    type = 'dropdown';
    choices: {[key: string]:string};

    constructor(options: {choices:{[key:string]:string}}) {
        super(options);
        this.choices = options.choices || {};
    }
}
