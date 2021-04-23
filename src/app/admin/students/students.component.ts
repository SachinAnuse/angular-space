import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Student } from 'src/app/entity/student'
import { AdminService } from '../admin.service'
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor (private _adminService: AdminService, public dialog: MatDialog) {}

  students: Student
  ngOnInit (): void {
    this._adminService.allStudents().subscribe(data => {
      this.students = data
    })
  }

  openDialog (id) {
    localStorage.setItem('selectedStudentId',id);
    this.dialog.open(EditStudentDialogComponent, {
      width: '600px'
    })
  }
}
