import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppPipeModule } from '../shared/components/pipe/app-pipe.module';
import { StarModule } from '../shared/components/star/star.module';
import { CourseInfoComponent } from './components/course-info-component';
import { CourseListComponent } from './course-list-component';

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CourseModule {}
