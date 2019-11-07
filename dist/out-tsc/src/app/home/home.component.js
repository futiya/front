import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
let HomeComponent = class HomeComponent {
    constructor(authenticationService, router, dialog) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.dialog = dialog;
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authenticationService.logout();
        location.reload(true);
    }
    addCourseDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '500px';
        dialogConfig.data = {
            username: this.currentUser.username
        };
        this.dialog.open(AddCourseComponent, dialogConfig);
        // const dialogRef = this.dialog.open(AddCourseComponent,
        //   dialogConfig);
        // dialogRef.afterClosed().subscribe(
        //   val => console.log('Dialog output:', val)
        // );
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map