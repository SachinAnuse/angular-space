import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';

export const adminRoutes: Routes = [
 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'students', component: StudentsComponent },
        { path: 'courses', component: AllCoursesComponent },
       
      ]
    },
  { path: '**', component: PageNotFoundComponent }
];
