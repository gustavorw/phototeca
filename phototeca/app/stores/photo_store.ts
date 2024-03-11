import { create } from "zustand";
import { Photo } from "../models/photo";

interface PhotoState {
    photos: Photo[],
    addPhotos: (photos: Photo[]) => void,
    toggleLoad: () => void,
    load: boolean

}

export const photoStore = create<PhotoState>()((set) => ({
    photos: [],
    load: true,
    addPhotos: (photos: Photo[]) => set((state) => ({ photos: state.photos.concat(photos) })),
    toggleLoad: () => set((state) => ({ load: !state.load }))

})); 
