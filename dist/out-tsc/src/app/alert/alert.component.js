import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AlertComponent = class AlertComponent {
    constructor(alertService, snackBar) {
        this.alertService = alertService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    // message.cssClass = 'alert alert-success';
                    this.snackBar.open(message.text, 'close', {
                        duration: 2000,
                        panelClass: ['success-snackbar']
                    });
                    break;
                case 'warn':
                    // message.cssClass = 'alert alert-danger';
                    this.snackBar.open(message.text, 'close', {
                        duration: 2000,
                        panelClass: ['warn-snackbar']
                    });
                    break;
                case 'error':
                    // message.cssClass = 'alert alert-danger';
                    this.snackBar.open(message.text, 'close', {
                        duration: 2000,
                        panelClass: ['error-snackbar']
                    });
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent = tslib_1.__decorate([
    Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.css']
    })
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map