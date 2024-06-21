export type ResponsePhoto = {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
};

export interface Photo {
  id: number;
  photographer: string;
  alt: string;
  url: string;
  src: PhotoSrc;
}

interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
