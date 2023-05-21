import { Component, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AbstractValueAccessor } from '../../abstracts/abstract-value-accessor';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-generic-checkbox',
    imports: [
        CheckboxGroupComponent,
        CheckboxComponent,
        ReactiveFormsModule,
        CommonModule,
    ],
    templateUrl: './generic-checkbox.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: GenericCheckboxComponent,
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: GenericCheckboxComponent,
        },
    ],
})
/**
 * Generic checkbox - inspired by: https://mihalcan.medium.com/angular-multiple-check-boxes-45ad2119e115
 *
 * @param data: any[] - Data array to generate your checkbox component.
 *
 * @param labelRef: string | string[] - The object property which should be used as label.
 * You can pass a single string value or several props in an array - eg: (['firstname', 'lastname']).
 *
 * @param valueRef: string - The object property you want to get as form value (eg: 'id').
 *
 * @param multipleSelection: boolean - Indicates whether you want to allow multiple checkbox selection (default: true).
 *
 * @return valueRef of checked checkbox(es) as reactive form control data.
 * */
export class GenericCheckboxComponent extends AbstractValueAccessor {
    control = new FormControl();
    @Input() public data: any[] = [];
    @Input() public labelRef: string | string[] = '';
    @Input() public valueRef: string = '';
    @Input() public multipleSelection = true;

    public getLabel(item: any): string {
        if (!Array.isArray(this.labelRef)) {
            return item[this.labelRef];
        }
        let fullLabel: string = '';
        this.labelRef.forEach((label: string, index: number) => {
            fullLabel += item[label] + (index === this.labelRef.length ? '' : ' ');
        });
        return fullLabel;
    }

}
