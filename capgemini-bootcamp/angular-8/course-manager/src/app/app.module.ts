import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseInfoComponent } from './courses/components/course-info-component';
import { CourseListComponent } from './courses/course-list-component';
import { NavBarComponent } from './nav-bar/nav-bar-component';
import { PageNotFound } from './pageNotFound/pageNotFound.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    PageNotFound,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },

      {
        path: '**',
        component: PageNotFound,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
