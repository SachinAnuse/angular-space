import { Component, OnInit } from '@angular/core'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  constructor (private _studentService: StudentService) {}
  primaryCourses: []
  secondaryCourses: []
  generalCourses: []
  ngOnInit (): void {
    let id = localStorage.getItem('id')
    this._studentService.loadCourses(id).subscribe(data => {
      this.primaryCourses = data.primary
      this.secondaryCourses = data.secondary
      this.generalCourses = data.general
    })
  }
}
