import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let CourseService = class CourseService {
    constructor(http) {
        this.http = http;
    }
    addCourse(course) {
        return this.http.post(`${environment.gatewayurl}/course/api/v1/addcourse`, course);
    }
    addRate(rate) {
        return this.http.post(`${environment.gatewayurl}/course/api/v1/addrate`, rate);
    }
    findCourses() {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/mentor/listAll`);
    }
    searchCourses() {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/mentor/searchcourse`);
    }
    bookCourses(bookcourse) {
        return this.http.post(`${environment.gatewayurl}/course/api/v1/mentor/book`, bookcourse);
    }
    findUserCourses(progress, username) {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/user/list?progress=${progress}&username=${username}`);
    }
    findUserCompletedCourses(username) {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/user/listdone?&username=${username}`);
    }
    findMentorCourses(progress, mentorname) {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/listCurrentCourse?mentorname=${mentorname}`);
    }
    findMentorAvailableCourses(mentorname) {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/listavailablecourse?mentorname=${mentorname}`);
    }
    findMentorCompletedCourses(mentorname) {
        return this.http.get(`${environment.gatewayurl}/course/api/v1/mentor/listdone?mentorname=${mentorname}`);
    }
};
CourseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CourseService);
export { CourseService };
//# sourceMappingURL=course.service.js.map