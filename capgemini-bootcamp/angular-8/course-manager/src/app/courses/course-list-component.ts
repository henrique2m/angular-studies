import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list-component.html',
  styleUrls: ['./course-list-component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy!: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll() {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: (err) => console.warn('Error ', err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
