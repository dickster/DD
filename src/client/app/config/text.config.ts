import { WidgetConfig } from './widget.config';

export class TextConfig extends WidgetConfig<string> {
    type = 'text';
    inputType : string;

    constructor(options: {inputType:string}) {
        super(options);
        this.inputType = options.inputType || '';
    }
}
