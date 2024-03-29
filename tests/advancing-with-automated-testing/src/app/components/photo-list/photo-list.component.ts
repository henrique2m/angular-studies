import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$: Observable<IPhoto[]>;
  public fa = {
    faCircleNotch,
  };

  constructor(private _photoBoardService: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this._photoBoardService.getPhotos();
  }
}
