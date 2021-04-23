import { Component, OnInit } from '@angular/core'
import { Course } from 'src/app/entity/course'
import { SnackBarGeneratorService } from 'src/app/utility/snack-bar-generator.service'
import { AdminService } from '../../admin.service'

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  constructor (private _adminService: AdminService,private snackbar : SnackBarGeneratorService) {}
  course: Course
  ngOnInit (): void {
    let id = localStorage.getItem('selectedCourseId')
    this._adminService.courseById(id).subscribe(data => {this.course = data;})
  }

  add (controls) {
    this._adminService.updateCourse(this.course).subscribe(data => {
      if (data == null) {
        this.snackbar.openErrorSnackBar("unable to update course details","try again")
      } else {
        setTimeout(()=>window.location.reload(),5000);
        this.snackbar.openSuccessSnackBar('course details updated successfully','ok')
       
      }
    })
  }
}
