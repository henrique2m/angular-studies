import { IPhoto } from '../interfaces/photo';

export const buildPhotoList = (): IPhoto[] => {
  const photos: IPhoto[] = [];

  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }

  return photos;
};
