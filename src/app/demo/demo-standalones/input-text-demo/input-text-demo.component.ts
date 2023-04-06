import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text-demo',
  templateUrl: './input-text-demo.component.html',
})
export class InputTextDemoComponent {

  group = this.fb.group({
    control: new FormControl('', { nonNullable: false, validators: [Validators.required, Validators.minLength(5)] })
  });

  constructor(private fb: FormBuilder) {}

  get control(): FormControl {
    return this.group.get('control') as FormControl;
  }
}
