import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entity/student';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css']
})
export class EditStudentDialogComponent implements OnInit {

  constructor(private _adminService:AdminService) { }
student:Student
  ngOnInit(): void {
    let id = localStorage.getItem('selectedStudentId');
    this._adminService.studentById(id).subscribe(data=>{this.student = data})
  }

  add(controls){
    this._adminService.updateStudent(this.student).subscribe(data=>{
      
      alert('student details updated successfully')
      window.location.reload()})
  }

}
