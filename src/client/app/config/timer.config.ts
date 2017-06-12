import { WidgetConfig } from './widget.config';
import {Endpoint} from "../model/endpoint";

export class TimerConfig extends WidgetConfig<string> {
    private event:string;
    private endpoint:Endpoint;
    private delay:number;

    // use @Output and eventemitter if needed.
    // @Output() emitter = new EventEmitter<string>();
    // setTimeout(function( emitter.emit(event)) }, delay);

    constructor(options: {
            key: string,
            type: 'timer',
            endpoint: Endpoint,
            event:string,
            delay:number
            }) {
        super(options);
        this.event = options.event;
        this.endpoint = options.endpoint;
        this.delay = options.delay;
    }

}



// buttonConfig: extends endpoint,  when clicked, triggers event.    looks for on {{event}} method in controller
// when creating form use a factory. that takes workflow parameter.
//     so generic form has a controller.  it receives events.
//
//     modal dialogs are like tab panels…a specific type of panel.
//     need a button/link that invokes the dialog.   default form controller handles “dialogEvent:open:{{name}}” and does whatever .js is needed.