import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Address } from 'src/app/entity/address'
import { SnackBarGeneratorService } from 'src/app/utility/snack-bar-generator.service'
import { StudentService } from '../../student.service'

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})
export class AddressDialogComponent implements OnInit {
  constructor (
    private _studentService: StudentService,
    private router: Router,
    private snackbar : SnackBarGeneratorService
  ) {}
  address: Address
  ngOnInit (): void {
    let id = localStorage.getItem('id')
    this._studentService.loadAddress(id).subscribe(data => {
      this.address = data
    })
  }

  add (controls) {
    this._studentService.addAddressDetails(this.address).subscribe(data => {
      if (data == null) {
        this.snackbar.openErrorSnackBar("unable to update address","try again")
      } else {
        setTimeout(()=>window.location.reload(),5000);
        this.snackbar.openSuccessSnackBar('address updated successfully','ok')
        this.router.navigate(['/student/studentProfile'])
      }
    })
  }
}
