import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
    public navLinks: INavLink[] = [
        {
            title: 'Home',
            link: '/demo/home',
            icon: 'i-home'
        },
        {
            title: 'Input-text',
            link: '/demo/input-text',
            icon: 'i-newspaper'
        }
    ]
}

export interface INavLink {
    title: string;
    link: string;
    icon: string;
}
