import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Education } from 'src/app/entity/education'
import { SnackBarGeneratorService } from 'src/app/utility/snack-bar-generator.service'
import { StudentService } from '../../student.service'

@Component({
  selector: 'app-education-dailog',
  templateUrl: './education-dailog.component.html',
  styleUrls: ['./education-dailog.component.css']
})
export class EducationDailogComponent implements OnInit {
  constructor (
    private _studentService: StudentService,
    private router: Router,private snackbar : SnackBarGeneratorService
  ) {}
  education: Education
  
  ngOnInit (): void {
    let id = localStorage.getItem('id')
    this._studentService.loadEducation(id).subscribe(data => {
      this.education = data
    })
  }

  add (controls) {
    this._studentService.addEducationDetails(this.education).subscribe(data => {
      if (data == null) {
        this.snackbar.openErrorSnackBar("unable to update education details","try again")
      } else {
        setTimeout(()=>window.location.reload(),5000);
        this.snackbar.openSuccessSnackBar('education details updated successfully','ok')
        this.router.navigate(['/student/studentProfile'])
       
      }
    })
  }
}
