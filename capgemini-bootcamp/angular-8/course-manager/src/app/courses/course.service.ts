import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) {}

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.courseUrl);
  }

  retrieveById(id: number): Observable<Course> {
    const filter: string = `${this.courseUrl}/${id}`;
    return this.httpClient.get<Course>(filter);
  }

  save(course: Course): Observable<Course> {
    const filter: string = `${this.courseUrl}/${course.id}`;

    if (course.id) return this.httpClient.put<Course>(filter, course);

    return this.httpClient.post<Course>(this.courseUrl, course);
  }
}
