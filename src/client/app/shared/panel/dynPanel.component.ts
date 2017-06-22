import {Component, Input, OnInit, ElementRef} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import {FormConfig} from "../../config/form.config";
import {FormType} from "../../config/FormType";


@Component({
    selector: 'dynForm',
    templateUrl: 'app/ai.component.html',
    // providers: [FormConfigService]
})
export class DynPanel implements OnInit {

    form:FormGroup;
    questions: any[];
    private formConfig: FormConfig;

    //@Input formId:DocId
    // need to read controller name. it will handle submits and clicks and ???
    // what is this bound to???

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
            type:FormType.DYNAMIC,
            version:{major:1, minor:0},
            rules: [],
            panels:[{
                type: 'simple',
                rules: [],
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
                        rules: [],
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

// need an initial state that will do (pre)validations after time (1ms)

// need a workflow page - takes a Workflow DocId as parameter.
// router-outlet is page thingy which contains dynForm.  workId = blah.
// load work object.  load policy (embedded?) get workflow definition.
// dataservice.resetState(workflowId);
// dataservice.getCurrentForm();  ..getWorkflowDefinition()...save/upsert()...etc...

// dynForm takes formId & uses dataservice to get formData.


