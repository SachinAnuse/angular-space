import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Course } from 'src/app/entity/course'
import { AdminService } from '../admin.service'
import { EditCourseComponent } from './edit-course/edit-course.component'

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  constructor (private _adminService: AdminService, public dialog: MatDialog) {}
  courses: Course
  ngOnInit (): void {
    this._adminService.allCourses().subscribe(data => {
      this.courses = data
    })
  }
  openDialog (id) {
    localStorage.setItem('selectedCourseId',id);
    this.dialog.open(EditCourseComponent, {
      width: '600px'
    })
  }
}
