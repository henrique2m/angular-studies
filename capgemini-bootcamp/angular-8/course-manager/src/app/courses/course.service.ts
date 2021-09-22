import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  retrieveAll(): Course[] {
    return COURSES;
  }
}

const COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular',
    imageUrl: '/assets/images/forms.png',
    price: 99.9,
    code: 'A-000',
    duration: 120,
    rating: 4.5,
    releaseDate: new Date(),
  },
  {
    id: 2,
    name: 'React',
    imageUrl: '/assets/images/http.png',
    price: 200.0,
    code: 'R-002',
    duration: 300,
    rating: 7.5,
    releaseDate: new Date(),
  },
];
