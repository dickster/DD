import { WidgetConfig } from './widget.config';
import {Endpoint} from "../model/endpoint";

export class ButtonConfig extends WidgetConfig<string> {
    private event:string;
    private endpoint:Endpoint;

    // use @Output and eventemitter if needed.
    // @Output() emitter = new EventEmitter<string>();
    // on click emitter.emit(event);

    constructor(options: {
            key: string,
            type: 'button',
            endpoint: Endpoint,
            event:string
            }) {
        super(options);
        this.event = options.event;
        this.endpoint = options.endpoint;
    }

}



// buttonConfig: extends endpoint,  when clicked, triggers event.    looks for on {{event}} method in controller
// when creating form use a factory. that takes workflow parameter.
//     so generic form has a controller.  it receives events.
//
//     modal dialogs are like tab panels…a specific type of panel.
//     need a button/link that invokes the dialog.   default form controller handles “dialogEvent:open:{{name}}” and does whatever .js is needed.