
import {StateService} from "../../services/state.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ElementRef} from "@angular/core";
import {State} from "../../model/state";
import {Observable} from "rxjs";
import {URLSearchParams} from "@angular/http";

export class WorkComponent {
    private state:State;
    private error:any;

    constructor(private router:Router,
        private route:ActivatedRoute,
        private formBuilder: FormBuilder,
        private elementRef:ElementRef,
        private stateService:StateService
    ) {
        // shouldn't i subscribe to this???
        let workflowId = route.snapshot.params['workflowId'];
        // state service should cache the results?  only do initial get
        // and it should persist any time a transition is made.
        this.stateService.get({workflowId:workflowId})
            .subscribe(
                res => this.state = res,
                error => this.error = <any>error
            );

    }


}
