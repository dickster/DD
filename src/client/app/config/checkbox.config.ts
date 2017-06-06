import { WidgetConfig } from './widget.config';

export class CheckBoxConfig extends WidgetConfig<string> {
    type = 'checkbox';

    constructor(options: {} = {}) {
        super(options);
    }
}
