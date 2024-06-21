import { Photo, ResponsePhoto } from "../models/photo";
import { client } from "../lib/client";

const photoKey = "photos";

interface IPhotoRepository {
  getPhotosByTerm: (search: SearchPhotoTerms) => Promise<ResponsePhoto | null>;
  getPhotosByCurated: (page: number) => Promise<ResponsePhoto | null>;
  allFavoritePhotos: () => Photo[] | null;
  addFavoritePhoto: (photo: Photo) => void;
  removeFavoritePhoto: (photo: Photo) => void;
}

export type SearchPhotoTerms = {
  query?: string;
  page?: number;
};

export const PhotoRepository: IPhotoRepository = {
  getPhotosByTerm,
  getPhotosByCurated,
  allFavoritePhotos,
  addFavoritePhoto,
  removeFavoritePhoto,
};

async function getPhotosByTerm(search: SearchPhotoTerms) {
  try {
    const { data } = await client.get<ResponsePhoto>("search", {
      params: {
        ...search,
        per_page: 20,
      },
    });
    return data;
  } catch (err) {
    console.log(`getPhotosByTerm - ${err}`);
    return null;
  }
}

async function getPhotosByCurated(page: number) {
  try {
    const { data } = await client.get<ResponsePhoto>("curated", {
      params: {
        page,
        per_page: 20,
      },
    });
    return data;
  } catch (err) {
    console.log(`getPhotosByCurated - ${err}`);
    return null;
  }
}

function allFavoritePhotos() {
  try {
    const photos: Photo[] = JSON.parse(localStorage.getItem(photoKey) ?? "");
    return photos;
  } catch (err) {
    console.log(`allFavoritPhotos - ${err}`);
    return null;
  }
}

function addFavoritePhoto(photo: Photo) {
  const photos = allFavoritePhotos();
  if (photos === null) {
    localStorage.setItem(photoKey, JSON.stringify([photo]));
  }
  if (photos?.filter((current) => current.id === photo.id)) {
    removeFavoritePhoto(photo);
    return;
  }
  photos?.push(photo);
  localStorage.setItem(photoKey, JSON.stringify(photos));
}

function removeFavoritePhoto(photo: Photo) {
  const photos = allFavoritePhotos();
  if (photo === null) {
    return;
  }
  const newPhotos = photos?.filter((current) => current.id !== photo.id);
  localStorage.setItem(photoKey, JSON.stringify(newPhotos));
}
