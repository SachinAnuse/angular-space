import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  

  ngOnInit() {
  }

  login(control) {
    let username = control.value.username
    let password = control.value.password
    this._authService.login(username,password);
  }


}
