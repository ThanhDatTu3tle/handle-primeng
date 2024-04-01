import { NgModule } from '@angular/core';
// import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Primeng
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';

// Components
import { HeaderComponent } from './components/header/header.component';
import { MegaHorizontalmenuComponent } from './components/megahorizontalmenu/megahorizontalmenu.component';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { OfficeComponent } from './pages/office/office.component';
import { LoginModule } from './pages/login/login.module';

@NgModule({
    declarations: [
        // App
        AppComponent,

        // Primeng

        // Components
        HeaderComponent,
        MegaHorizontalmenuComponent,

        // Pages
        DashboardComponent,
        UserProfileComponent,
        OfficeComponent
    ],
    imports: [
        AppRoutingModule,

        LoginModule,
        
        BreadcrumbModule,
        ButtonModule,
        SidebarModule,
        MegaMenuModule
    ],
    providers: [
        // { provide: LocationStrategy, useClass: PathLocationStrategy },
        // CountryService, CustomerService, EventService, IconService, NodeService,
        // PhotoService, ProductService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
