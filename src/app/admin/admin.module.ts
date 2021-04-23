import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { adminRoutes } from "./admin.routes";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { StudentsComponent } from './students/students.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EditStudentDialogComponent } from './students/edit-student-dialog/edit-student-dialog.component';
import { EditCourseComponent } from './all-courses/edit-course/edit-course.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    BrowserAnimationsModule,MatSidenavModule,MatToolbarModule,MatIconModule, FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    AvatarModule,
  ],
  providers: [
    AuthGuard,
    RoleGuard,
  ],
  declarations: [ 
    AdminLayoutComponent,
    StudentsComponent,
    AllCoursesComponent,
    EditStudentDialogComponent,
    EditCourseComponent]
})
export class AdminModule { }
