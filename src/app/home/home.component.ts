import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit() {
  }

  logoutuser() {
    this.authenticationService.logout();
    location.reload(true);
  }

}
