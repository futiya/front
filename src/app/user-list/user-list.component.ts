import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../service/course.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  loading = false;
  courses: Course[];
  showCourse: boolean;
  @Input() userRole: string;
  @Input() searchText: string;
  rating: string;
  username: string;

  constructor(private courseservice: CourseService,
              private alertService: AlertService) { }

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
    },
    error => {
          this.alertService.error(error);
          this.showCourse = false;
          });
  }

  vote() {
    console.log('vote');
  }

  book(id: number) {

    this.loading = true;
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.courseservice.bookCourses(id, this.username).subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      if (data['code'] === 200) {
        // tslint:disable-next-line:no-string-literal
        this.alertService.success(data['message']);
        this.loading = false;
      }
    },
    error => {
      this.alertService.error(error);
      this.loading = false;
      });


  }

  selectCourseClick(tab) {

    if (tab.index === 0) {
      this.getCourses();
    } else {
      this.showCourse = true;
      this.username = JSON.parse(localStorage.getItem('currentUser')).username;
      this.courseservice.findUserCourses(tab.index, this.username).subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      if (data['code'] === 200) {
        // tslint:disable-next-line:no-string-literal
        this.showCourse = false;
        // tslint:disable-next-line:no-string-literal
        this.alertService.success(data['message']);
      // tslint:disable-next-line:no-string-literal
      } else if (data['code'] === 404) {
        // tslint:disable-next-line:no-string-literal
        this.showCourse = false;
        // tslint:disable-next-line:no-string-literal
        this.alertService.warn(data['message']);
      }
    },
    error => {
      this.showCourse = false;
      this.alertService.error(error);
      });
  }
    }


}
