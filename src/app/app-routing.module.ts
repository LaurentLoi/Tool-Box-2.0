import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/demo/home'
    },
    {
        title: 'Demo',
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
