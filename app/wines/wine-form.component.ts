import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { IWine } from '../shared/models/wine';

@Component({
    moduleId: module.id,
    selector: 'wine-form',
    templateUrl: '/app/wines/wine-form.component.html'
})
export class WineFormComponent implements OnInit {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() { 
        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            vintage: ['', <any>Validators.required]
        });
    }

    save(model: IWine, isValid: boolean) {
        this.submitted = true;

        console.log(model, isValid);
    }
}