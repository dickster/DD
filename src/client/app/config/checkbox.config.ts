import { WidgetConfig } from './widget.config';

export class CheckBoxConfig extends WidgetConfig<string> {

    constructor(options: {
            type: 'checkbox',
            key: string,
            }) {
        super(options);
    }
}
