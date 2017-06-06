import { WidgetConfig } from './widget.config';

export class YesNoConfig extends WidgetConfig<string> {
    type = 'yesno';

    constructor(options: {}) {
        super(options);
    }
}
