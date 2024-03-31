import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Primeng
import { PrimeNGConfig } from 'primeng/api';

// Components
import { MegaHorizontalmenuComponent } from './components/megahorizontalmenu/megahorizontalmenu.component';
import { HeaderComponent } from './components/header/header.component';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // App
    RouterOutlet, 

    // Components
    MegaHorizontalmenuComponent,
    HeaderComponent,
  
    // Pages
    DashboardComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    '../../node_modules/primeflex/primeflex.css']
})
export class AppComponent implements OnInit {
  
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
