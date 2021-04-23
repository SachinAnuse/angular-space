import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { StudentService } from '../student.service'
import { AddressDialogComponent } from './address-dialog/address-dialog.component'
import { EducationDailogComponent } from './education-dailog/education-dailog.component'
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor (private _studentService: StudentService, public dialog: MatDialog) {}

  user
  ngOnInit (): void {
    let id = localStorage.getItem('id');
    this._studentService.loadProfile(id).subscribe(data=>{
      this.user = data
    })
  }
  openDialog () {
    this.dialog.open(EducationDailogComponent, {
      width: '600px',
    })
  }

  openExperienceDialog () {
     this.dialog.open(ExperienceDialogComponent, {
      width: '600px',
    })
  }
  openAddressDialog () {
     this.dialog.open(AddressDialogComponent, {
      width: '600px',
    })
  }
}
