import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { SnackBarGeneratorService } from '../utility/snack-bar-generator.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user

  constructor (private _router: Router, private http: HttpClient,private snackbar : SnackBarGeneratorService) {}

  
    
  clear (): void {
    localStorage.clear()
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated (): boolean {
    return localStorage.getItem('userMail') != null
  }

  login (username, password): void {
    this.http
      .get('http://localhost:8282/login/' + username + '/' + password)
      .subscribe(data => {
        if(data == null){
         this.snackbar.openErrorSnackBar('INVALID username or password','try again')
        }
       
        var jsonStr = JSON.stringify(data)
        var jsonObject = JSON.parse(jsonStr)
        localStorage.setItem('userMail', jsonObject.email)
        localStorage.setItem('role', jsonObject.role)
        localStorage.setItem('id', jsonObject.id)
        this.user = jsonObject
        if (jsonObject.role == 'student') {
          this._router.navigate(['/student'])
        }

        if (jsonObject.role == 'admin') {
          this._router.navigate(['/admin'])
        }
      })
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout (): void {
    this.clear()
    this._router.navigate(['/login'])
  }
}
