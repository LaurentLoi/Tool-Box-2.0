import { AbstractControl, ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';

export abstract class AbstractValueAccessor implements ControlValueAccessor, Validator {
    abstract control: FormControl;

    onTouched = () => {};

    registerOnTouched(onTouched: any): void {
        this.onTouched = onTouched;
    }

    registerOnChange(onChange: any): void {
        this.control.valueChanges.subscribe(onChange);
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return control.errors;
    }

    setDisabledState(disabled: boolean): void {
        if (disabled) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }

    writeValue(value: any): void {
        if (value) {
            this.control.setValue(value, {emitEvent: false});
        }
    }

    // todo add validators
}
