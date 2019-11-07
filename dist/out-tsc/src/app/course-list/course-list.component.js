import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let CourseListComponent = class CourseListComponent {
    constructor(courseservice, alertService) {
        this.courseservice = courseservice;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.mentorname = JSON.parse(localStorage.getItem('currentUser')).username;
        this.getMentorCourse();
    }
    getMentorCourse() {
        this.showMentorCourse = true;
        this.courseservice.findMentorCourses(1, this.mentorname).subscribe(data => {
            // tslint:disable-next-line:no-string-literal
            if (data['code'] === 200) {
                // tslint:disable-next-line:no-string-literal
                this.mentorcourses = data['data'];
                this.showMentorCourse = false;
                // tslint:disable-next-line:no-string-literal
            }
            else if (data['code'] === 404) {
                // tslint:disable-next-line:no-string-literal
                this.showMentorCourse = false;
                // tslint:disable-next-line:no-string-literal
                this.alertService.warn(data['message']);
            }
        }, error => {
            this.alertService.error(error);
            this.showMentorCourse = false;
        });
    }
    getCoursesMentor() {
        this.showAvailableMentorCourse = true;
        this.courseservice.findMentorAvailableCourses(this.mentorname).subscribe(data => {
            // tslint:disable-next-line:no-string-literal
            if (data['code'] === 200) {
                // tslint:disable-next-line:no-string-literal
                this.mentoravailablecourses = data['data'];
                this.showAvailableMentorCourse = false;
                // tslint:disable-next-line:no-string-literal
            }
            else if (data['code'] === 404) {
                // tslint:disable-next-line:no-string-literal
                this.showAvailableMentorCourse = false;
                // tslint:disable-next-line:no-string-literal
                this.alertService.warn(data['message']);
            }
        }, error => {
            this.alertService.error(error);
            this.showAvailableMentorCourse = false;
        });
    }
    getCompletedCoursesMentor() {
        this.showCompletedMentorCourse = true;
        this.courseservice.findMentorCompletedCourses(this.mentorname).subscribe(data => {
            // tslint:disable-next-line:no-string-literal
            if (data['code'] === 200) {
                // tslint:disable-next-line:no-string-literal
                this.mentorcompletedcourses = data['data'];
                this.showCompletedMentorCourse = false;
                // tslint:disable-next-line:no-string-literal
            }
            else if (data['code'] === 404) {
                // tslint:disable-next-line:no-string-literal
                this.showCompletedMentorCourse = false;
                // tslint:disable-next-line:no-string-literal
                this.alertService.warn(data['message']);
            }
        }, error => {
            this.alertService.error(error);
            this.showCompletedMentorCourse = false;
        });
    }
    selectCourseClick(tab) {
        if (tab.index === 1) {
            this.getCompletedCoursesMentor();
        }
        else if (tab.index === 2) {
            this.getCoursesMentor();
        }
        else {
            this.getMentorCourse();
        }
    }
    getStatusColor(status) {
        switch (status) {
            case 'expired':
                return 'gray';
            case 'available':
                return 'chartreuse';
            case 'booked':
                return 'lightblue';
            case 'progress':
                return 'bisque';
            case 'completed':
                return 'blueviolet';
        }
    }
};
tslib_1.__decorate([
    Input()
], CourseListComponent.prototype, "searchText", void 0);
CourseListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-course-list',
        templateUrl: './course-list.component.html',
        styleUrls: ['./course-list.component.css']
    })
], CourseListComponent);
export { CourseListComponent };
//# sourceMappingURL=course-list.component.js.map