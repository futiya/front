import { Component, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(6)]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getPassWordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('min') ? 'Password need to min 6 length' :
            '';
  }


}
