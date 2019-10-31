import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewCourse } from '../models/newCourse';
import { NewRate } from '../models/newRate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  addCourse(course: NewCourse) {
    return this.http.post(`${environment.gatewayurl}/course/api/v1/addcourse`, course);
  }


  addRate(rate: NewRate) {
    return this.http.post(`${environment.gatewayurl}/course/api/v1/addrate`, rate);
  }

  findCourses() {
    return this.http.get(`${environment.gatewayurl}/course/api/v1/mentor/list`);
  }

}
