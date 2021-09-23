import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list-component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [AppComponent, CourseListComponent, StarComponent, ReplacePipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
