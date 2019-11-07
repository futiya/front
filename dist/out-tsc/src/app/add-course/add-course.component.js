import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
let AddCourseComponent = class AddCourseComponent {
    constructor(datePipe, fb, dialogRef, { username }, courseService, alertService) {
        this.datePipe = datePipe;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.courseService = courseService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.username = username;
        this.form = fb.group({
            name: ['', Validators.required],
            description: [''],
            startAt: ['', Validators.required],
            endAt: ['', Validators.required],
            skill: ['', Validators.required],
            fee: ['', Validators.required],
            mentorName: [username]
        });
    }
    ngOnInit() {
        this.minDate = new Date();
    }
    save() {
        if (this.form.valid) {
            const course = {
                name: this.form.value.name,
                description: this.form.value.description,
                skill: this.form.value.skill,
                startDate: this.datePipe.transform(this.form.value.startAt, 'yyyy-MM-dd'),
                endDate: this.datePipe.transform(this.form.value.endAt, 'yyyy-MM-dd'),
                mentorName: this.form.value.mentorName,
                fee: this.form.value.fee,
                email: this.username
            };
            this.submitted = true;
            // reset alerts on submit
            this.alertService.clear();
            this.loading = true;
            this.courseService.addCourse(course)
                .pipe(first())
                .subscribe(data => {
                // tslint:disable-next-line:no-string-literal
                if (data['code'] === 200) {
                    // tslint:disable-next-line:no-string-literal
                    this.alertService.success(data['message']);
                }
            }, error => {
                this.alertService.error(error);
                this.loading = false;
            });
            this.dialogRef.close(course);
        }
    }
    close() {
        this.dialogRef.close();
    }
};
AddCourseComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-course',
        templateUrl: './add-course.component.html',
        styleUrls: ['./add-course.component.css'],
        providers: [
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
        ]
    }),
    tslib_1.__param(3, Inject(MAT_DIALOG_DATA))
], AddCourseComponent);
export { AddCourseComponent };
//# sourceMappingURL=add-course.component.js.map