import { Component, Host, Input } from '@angular/core';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';

@Component({
    standalone: true,
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
    @Input() public value: any;
    @Input() public label: any;

    constructor(@Host() private checkboxGroup: CheckboxGroupComponent) {}

    public toggleCheck(): any {
        this.checkboxGroup.addOrRemove(this.value);
    }

    public isChecked(): any {
        return this.checkboxGroup.contains(this.value);
    }
}
