import { Component } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ErrorModel } from '../shared/error.model';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss']
})
export class CheckboxDemoComponent {

  group = this.fb.group({
    control: new FormControl([], {
      validators: [
        Validators.required,
        Validators.minLength(2),
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
