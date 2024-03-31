import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
  '../../../../node_modules/primeflex/primeflex.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
