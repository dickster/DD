import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {WidgetConfig} from "../../config/widget.config";

//import {CompleterService, CompleterData, LocalData} from "ng2-completer";

// TODO : refactor selector.
@Component({
    //moduleId: module.id,
    // styles:['[ng-reflect-value="2"] { background:pink; }'],
    selector: 'widget',
    templateUrl: './widget.component.html'
})
export class QuestionComponent {
    @Input() widget: WidgetConfig<any>;
    @Input() form: FormGroup;
//    private dataService:CompleterData = <CompleterData>{ };

    private searchData = [
        {value: 'Bob', key: '1754'},
        {value: 'Fred', key: '3972'},
        {value: 'Sally', key: '243'},
        {value: 'Cathy', key: '4948'},
        {value: 'Jim', key: '519'},
        {value: 'Sam', key: '6344'},
        {value: 'Susan', key: '9787'}
    ];
    

    //constructor(private completerService: CompleterService) {
  //      this.dataService = this.completerService.local(this.searchData, 'value', 'value');
//    }
    constructor() {
    }


    get isValid() { return this.form.controls[this.widget.key].valid; }
    get isPristine() { return this.form.controls[this.widget.key].pristine; }
    get isTouched() { return this.form.controls[this.widget.key].touched; }

    isVisible(formValue:any) : boolean  {
        // get bizrules of form.

        for (let bizRule of this.widget.bizRules) {
            //evaluate result = bizRule.showWhen();
            // result
        }
        return true;
    }

    // refactor this to take value parameter...   (control:string, value:string)
    isActiveYesNo(control:string) {
        let result : boolean = this.form.controls[control].value=='yes';
        return result;
    }

    ngOnInit() {
        if (this.widget.type!='autocomplete') return;
        console.log('init autocomplete');
        // if (this.widget['choices']) {
        //     console.log('...with choices ' + this.widget['choices']);
        //     (<LocalData>this.dataService).data(this.widget['choices']);
        // }
    }
}
