import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
