import {Component, Input, OnInit, ElementRef} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import {FormConfig} from "../../config/form.config";



page : dynpanel:[id]

@Component({
    templateUrl: 'app/ai.component.html',
    // providers: [FormConfigService]
})
export class DynPanel implements OnInit {

    form:FormGroup;
    questions: any[];
    private formConfig: FormConfig;

    //@Input formId:DocId
    // need to read controller name. it will handle submits and clicks and ???

    constructor(private router:Router,
                private route:ActivatedRoute,
                private formBuilder: FormBuilder,
                private elementRef:ElementRef,
                // private service: FormConfigService
    ) {

        let formId = route.snapshot.params['formId'];
//        this.formConfig = service.getFormConfig();
        this.formConfig = {
            title: 'test',
            version:{major:1, minor:0},
            bizRules: [],
            panels:[{
                type: 'simple',
                bizRules: [],
                rows: [{
                    widgets: [{
                        value: null,
                        key: 'name.first',
                        type: 'text',
                        label: 'First',
                        labelKey: null,
                        labelWidth: 3,
                        width: 3,
                        offset: 0,
                        required: false,
                        order: 0,
                        css: null,
                        rememberAs: null,
                        bizRules: [],
                    }],
                }],
            }],
            layout:'default',
            translations:null,
        }
    }

    ngOnInit() {
         this.form = this.formBuilder.group({});
    }

    ngAfterContentChecked() {
        // TODO  : move these hacks to a better spot.  common for all application.
        // jQuery(this.elementRef.nativeElement).find('.completer-input').addClass('form-control');
    }

    handleSubmit(event:any) {
        this.router.navigate(['/ai2']);
    }


}
