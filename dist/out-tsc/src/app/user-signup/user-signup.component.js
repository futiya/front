import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
let UserSignupComponent = class UserSignupComponent {
    constructor(userService, router, alertService, authenticationService) {
        this.userService = userService;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.hasError = (controlName, errorName) => {
            return this.userForm.controls[controlName].hasError(errorName);
        };
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.userForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            role: new FormControl('', Validators.required)
        });
    }
    addUser(userFormValue) {
        if (this.userForm.valid) {
            const user = {
                name: userFormValue.name,
                username: userFormValue.email,
                password: userFormValue.password,
                role: userFormValue.role
            };
            this.submitted = true;
            // reset alerts on submit
            this.alertService.clear();
            this.loading = true;
            this.userService.addUser(user)
                .pipe(first())
                .subscribe(data => {
                // tslint:disable-next-line:no-string-literal
                if (data['code'] === 202) {
                    this.alertService.warn('Account exist');
                    this.loading = false;
                }
                else {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                }
            }, error => {
                this.alertService.error(error);
                this.loading = false;
            });
        }
    }
};
UserSignupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-signup',
        templateUrl: './user-signup.component.html',
        styleUrls: ['./user-signup.component.css']
    })
], UserSignupComponent);
export { UserSignupComponent };
//# sourceMappingURL=user-signup.component.js.map