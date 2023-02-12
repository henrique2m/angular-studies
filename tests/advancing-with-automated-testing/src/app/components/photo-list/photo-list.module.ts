import { PhotoBoardModule } from './../../shared/components/photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PhotoListComponent],
  exports: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardModule, FontAwesomeModule],
  providers: [PhotoBoardService],
})
export class PhotoListModule {}
