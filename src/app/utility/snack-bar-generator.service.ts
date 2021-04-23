import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarGeneratorService {

  constructor(private snackBar: MatSnackBar){}
  public openErrorSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 5000,
         verticalPosition: 'top',
         horizontalPosition:'right',
         panelClass: ['error-snackbar']
      });
    }

    public openSuccessSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 5000,
         verticalPosition: 'top',
         horizontalPosition:'right',
         panelClass: ['success-snackbar']
      });
    }
}

