import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BreadcrumbModule, ButtonModule, SidebarModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
  '../../../../node_modules/primeflex/primeflex.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
