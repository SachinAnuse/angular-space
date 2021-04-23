import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EducationDailogComponent } from './profile/education-dailog/education-dailog.component';
import { ExperienceDialogComponent } from './profile/experience-dialog/experience-dialog.component';
import { AddressDialogComponent } from './profile/address-dialog/address-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    BrowserAnimationsModule,MatSidenavModule,MatToolbarModule,MatIconModule, FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    AvatarModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
  ],
  declarations: [ LayoutComponent, ProfileComponent, StudentDashboardComponent, MyCoursesComponent, EducationDailogComponent, ExperienceDialogComponent, AddressDialogComponent]
})
export class DashboardModule { }
