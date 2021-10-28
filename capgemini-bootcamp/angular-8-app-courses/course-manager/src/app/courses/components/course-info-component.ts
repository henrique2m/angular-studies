import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-info-component.html',
})
export class CourseInfoComponent implements OnInit {
  idCourse!: number;

  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.handleRouterId();
    this.handleCourse();
  }

  handleRouterId() {
    const idCourse = this.activatedRoute.snapshot.paramMap.get('id');

    if (idCourse === null) return;

    this.idCourse = +idCourse;
  }

  handleCourse() {
    this.courseService.retrieveById(this.idCourse).subscribe({
      next: (course) => (this.course = course),
      error: (err) => console.warn('Error ', err),
    });
  }

  save() {
    this.courseService.save(this.course).subscribe({
      next: (course) => console.info('Saved with success!', course),
      error: (err) => console.warn('Error', err),
    });
  }
}
