import { TestBed } from '@angular/core/testing';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockData = {
  api: 'http://localhost:3002/photos',
  data: [
    {
      id: 1,
      description: 'exemplo 1',
      src: '',
    },
    {
      id: 2,
      description: 'exemplo 2',
      src: '',
    },
  ],
};

describe(PhotoBoardService.name, () => {
  let photoBoardService: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    }).compileComponents();

    photoBoardService = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it(`${PhotoBoardService.prototype.getPhotos.name}
    should return photos with description in uppercase`, (done) => {
    photoBoardService.getPhotos().subscribe((photos) => {
      photos.forEach((photo) => {
        const { description } = photo;
        expect(description).toBe(description.toUpperCase());
      });

      done();
    });
    httpController.expectOne(mockData.api).flush(mockData.data);
  });
});
