import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../standalones/input-text/input-text.component';
import { DemoRoutingModule } from './demo-routing.module';
import { InputTextDemoComponent } from './demo-standalones/input-text-demo/input-text-demo.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { DemoComponent } from './demo.component';
import { GenericCheckboxComponent } from '../standalones/input-checkbox/generic-checkbox/generic-checkbox.component';
import { CheckboxDemoComponent } from './demo-standalones/checkbox-demo/checkbox-demo.component';



@NgModule({
    declarations: [
        DemoComponent,
        NavBarComponent,
        WelcomeComponent,
        InputTextDemoComponent,
        CheckboxDemoComponent,
    ],
    imports: [
        RouterModule,
        DemoRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        InputTextComponent,
        GenericCheckboxComponent,
    ]
})
export class DemoModule { }
