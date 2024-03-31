import { Component } from '@angular/core';

import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BadgeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  '../../../../node_modules/primeflex/primeflex.css']
})
export class HeaderComponent {

}
