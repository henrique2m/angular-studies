import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from 'src/app/shared/components/photo-board/tests/build-photo-list';
import { of } from 'rxjs';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let photoBoardService: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      declarations: [PhotoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    photoBoardService = TestBed.inject(PhotoBoardService);
  });

  it(`should create ${PhotoListComponent.name}`, () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Should display board when data arrives`, () => {
    const photos = buildPhotoList();
    spyOn(photoBoardService, 'getPhotos').and.returnValue(of(photos));
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('#loading');

    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });

  it(`(D) Should display loader while waiting for data`, () => {
    spyOn(photoBoardService, 'getPhotos').and.returnValue(null);
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('#loading');

    expect(board).withContext('Should not display board').toBeNull();
    expect(loader).withContext('Should display loader').not.toBeNull();
  });
});
