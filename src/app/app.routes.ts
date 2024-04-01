import { Routes } from '@angular/router';

// App
// import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

// Dashboard - Summary
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Office - Workflow
import { OfficeComponent } from './pages/office/office.component';

export const routes: Routes = [
    // App
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'auth/login', component: LoginComponent },
    { path: 'user-profile', component: UserProfileComponent },

    // Dashboard - Summary
    { path: 'dashboard', component: DashboardComponent },

    // Office - Workflow
    { path: 'workfollow/task-list', component: OfficeComponent }
];
