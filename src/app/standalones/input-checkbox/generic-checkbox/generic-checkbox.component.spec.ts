import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCheckboxComponent } from './generic-checkbox.component';

describe('TempComponent', () => {
    let component: GenericCheckboxComponent;
    let fixture: ComponentFixture<GenericCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GenericCheckboxComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GenericCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
