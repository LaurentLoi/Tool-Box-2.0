import { Component } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ErrorModel } from '../shared/error.model';

@Component({
    selector: 'app-input-text-demo',
    templateUrl: './input-text-demo.component.html',
})
export class InputTextDemoComponent {

    group = this.fb.group({
        control: new FormControl('', {
            nonNullable: false,
            validators: [
                Validators.required,
                Validators.minLength(5),
                Validators.email
            ]
        }),
    });

    data = [
        {value: 'a', label: 'a'},
        {value: 'b', label: 'b'},
        {value: 'c', label: 'c'},
    ]

    constructor(private fb: FormBuilder) {}

    get control(): FormControl {
        return this.group.get('control') as FormControl;
    }

    get controlErrors(): ErrorModel[] {
        const errors: ErrorModel[] = [];

        const controlErrors: ValidationErrors = this.control?.errors || {};
        if (controlErrors) {
            Object.keys(controlErrors).forEach(keyError => {
                errors.push({
                    error: keyError,
                    value: controlErrors[keyError]
                });
            });
        }
        return errors;
    }

}
