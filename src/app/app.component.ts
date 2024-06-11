import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, BreadCrumbsComponent]
})
export class AppComponent {
  title = 'frontCrm';
}
