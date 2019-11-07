import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
let UserLoginComponent = class UserLoginComponent {
    constructor(router, route, alertService, authenticationService) {
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.hasError = (controlName, errorName) => {
            return this.loginForm.controls[controlName].hasError(errorName);
        };
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login(loginFormValue) {
        if (this.loginForm.valid) {
            this.submitted = true;
            this.loading = true;
            this.authenticationService.login(loginFormValue.email, loginFormValue.password)
                .pipe(first())
                .subscribe(data => {
                x;
                this.router.navigate([this.returnUrl]);
            }, error => {
                this.alertService.error('Username or Password invalid');
                this.loading = false;
            });
        }
    }
};
UserLoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.css']
    })
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map