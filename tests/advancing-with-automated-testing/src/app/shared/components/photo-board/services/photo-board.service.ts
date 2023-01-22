import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/photo';

@Injectable()
export class PhotoBoardService {
  private url = 'http://localhost:3002';

  constructor(private _http: HttpClient) {}

  public getPhotos(): Observable<IPhoto[]> {
    return this._http.get<IPhoto[]>(`${this.url}/photos`);
  }
}
