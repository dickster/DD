
import { WidgetConfig } from './widget.config';

export class TextAreaConfig extends WidgetConfig<string> {
    type = 'textarea';
    rows:number;
    cols:number;

    constructor(options: {rows:number,cols:number}) {
        super(options);
        this.rows = options.rows;
        this.cols = options.cols;
    }
}
