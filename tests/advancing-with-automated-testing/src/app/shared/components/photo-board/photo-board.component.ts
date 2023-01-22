import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoto } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  @Input() public photos: IPhoto[];

  public rows: any[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.detectPhotoChanges(changes);
  }

  public detectPhotoChanges(changes: SimpleChanges) {
    if (!changes.photos) return;
    if (!Array.isArray(changes.photos.currentValue)) return;

    this.rows = this.groupColumns(changes.photos.currentValue);
  }

  public groupColumns(photos: IPhoto[]): any[][] {
    const newRows = [];
    const step = 4;

    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }

    return newRows;
  }
}
