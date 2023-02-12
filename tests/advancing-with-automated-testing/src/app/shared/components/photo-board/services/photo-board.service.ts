import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { IPhoto } from '../interfaces/photo';

@Injectable()
export class PhotoBoardService {
  private url = 'http://localhost:3002';

  constructor(private _http: HttpClient) {}

  public getPhotos(): Observable<IPhoto[]> {
    return this._http
      .get<IPhoto[]>(`${this.url}/photos`)
      .pipe(
        map((photos) => {
          return photos.map((photo) => {
            return { ...photo, description: photo.description.toUpperCase() };
          });
        })
      )
      .pipe(tap((photos) => console.log(photos)))
      .pipe(delay(2000));
  }
}
