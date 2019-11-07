import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MentorListComponent = class MentorListComponent {
    constructor(courseservice, alertService) {
        this.courseservice = courseservice;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.getCourses();
    }
    getCourses() {
        this.showCourse = true;
        this.courseservice.findCourses().subscribe(courses => {
            // tslint:disable-next-line:no-string-literal
            if (courses['code'] === 200) {
                // tslint:disable-next-line:no-string-literal
                this.courses = courses['data'];
                this.showCourse = false;
            }
            else if (courses['code'] === 404) {
                // tslint:disable-next-line:no-string-literal
                this.showCourse = false;
                // tslint:disable-next-line:no-string-literal
                this.alertService.warn(courses['message']);
            }
        }, error => {
            this.alertService.error(error);
            this.showCourse = false;
        });
    }
};
tslib_1.__decorate([
    Input()
], MentorListComponent.prototype, "userRole", void 0);
tslib_1.__decorate([
    Input()
], MentorListComponent.prototype, "searchText", void 0);
MentorListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mentor-list',
        templateUrl: './mentor-list.component.html',
        styleUrls: ['./mentor-list.component.css']
    })
], MentorListComponent);
export { MentorListComponent };
//# sourceMappingURL=mentor-list.component.js.map