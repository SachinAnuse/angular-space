import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

export const dashboardRoutes: Routes = [
  {
    path: 'student',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'studentProfile', pathMatch: 'full' },
      { path: 'studentProfile', component: ProfileComponent ,
      data: {role: 'student'},
      canActivate: [RoleGuard]
    },
      { path: 'studentDashboard', component: StudentDashboardComponent ,
      data: {role: 'student'},
      canActivate: [RoleGuard]
    },
      { path: 'myCourses', component: MyCoursesComponent,
      data: {role: 'student'},
      canActivate: [RoleGuard] }
    ]
  },
];
