import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar-component';
import { PageNotFound } from './components/pageNotFound/pageNotFound.component';

@NgModule({
  declarations: [NavBarComponent, PageNotFound],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: PageNotFound,
      },
    ]),
  ],
  exports: [NavBarComponent],
})
export class CoreModule {}
