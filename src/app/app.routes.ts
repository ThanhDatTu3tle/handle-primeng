import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
];