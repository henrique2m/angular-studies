import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from './shared/components/photo-board/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public photos$: Observable<IPhoto[]>;

  constructor(private _photoBoardService: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this._photoBoardService.getPhotos();
  }
}
