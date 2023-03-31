import { Component, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractValueAccessor } from '../abstracts/abstract-value-accessor';

@Component({
    standalone: true,
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: InputTextComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: InputTextComponent
        },
    ]
})
export class InputTextComponent extends AbstractValueAccessor {
    @Input()
    placeholder = '';
    @Input()
    inputType = InputTextTypesEnum.text;
    @Input()
    styleClass = '';

    control = new FormControl();

}

enum InputTextTypesEnum {
    text = 'text',
    email = 'email',
    password = 'password',
    url = 'url',
}
