import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { InputTextDemoComponent } from './demo-standalones/input-text-demo/input-text-demo.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'input-text',
                component: InputTextDemoComponent
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class DemoRoutingModule { }
