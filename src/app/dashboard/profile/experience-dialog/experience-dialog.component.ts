import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Experience } from 'src/app/entity/experience'
import { SnackBarGeneratorService } from 'src/app/utility/snack-bar-generator.service'
import { StudentService } from '../../student.service'

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  constructor (
    private _studentService: StudentService,
    private router: Router
    ,private snackbar : SnackBarGeneratorService
  ) {}

  experience: Experience

  ngOnInit (): void {
    let id = localStorage.getItem('id')
    this._studentService.loadExperience(id).subscribe(data => {
      this.experience = data
      console.log(this.experience)
    })
  }

  add (controls) {
    this._studentService
      .addExperienceDetails(this.experience)
      .subscribe(data => {
        if (data == null) {
          this.snackbar.openErrorSnackBar("unable to update experience details","try again")
        } else {
          setTimeout(()=>window.location.reload(),5000);
          this.snackbar.openSuccessSnackBar('experience details updated successfully','ok')
          this.router.navigate(['/student/studentProfile'])
        }
      })
  }
}
