import { Component, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractValueAccessor } from '../../abstracts/abstract-value-accessor';

@Component({
    standalone: true,
    selector: 'app-checkbox-group',
    template: `<ng-content></ng-content>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CheckboxGroupComponent,
            multi: true,
        },
    ],
})
export class CheckboxGroupComponent extends AbstractValueAccessor {
    @Input() public multipleSelection = true;
    control = new FormControl();
    private itemModel: any = [];

    public get model(): any {
        return this.itemModel;
    }

    public set(value: any): void {
        this.itemModel = value;
        this.writeValue(this.itemModel);
    }

    public addOrRemove(value: any): void {
        if (this.contains(value)) {
            this.remove(value);
        } else {
            this.add(value);
        }
    }

    public contains(value: any): boolean {
        if (Array.isArray(this.itemModel)) {
            return this.itemModel.indexOf(value) > -1;
        } else if (this.itemModel) {
            return this.itemModel === value;
        }
        return false;
    }

    private add(value: any): void {
        if (!this.contains(value)) {
            if (this.multipleSelection) {
                this.itemModel.push(value);
            } else {
                this.itemModel = [value];
            }
            this.writeValue(this.itemModel);
        }
    }

    private remove(value: any): void {
        const index: number = this.itemModel.indexOf(value);
        if (!this.itemModel || index < 0) {
            return;
        }
        this.itemModel.splice(index, 1);
        this.writeValue(this.itemModel);
    }
}
