import { AxiosError } from "axios";
import { fetchPhotoRepository } from "../repositories/photo_repository";
import { photoStore } from "../stores/photo_store";

import { Text } from "react-native";





export async function fetchPhotos(url: string, update: any) {

    // const addPhotos = photoStore((state) =>
    //     state.addPhotos
    // )

    // const toggleLoad = photoStore((state) =>
    //     state.toggleLoad
    // )

    const response = await fetchPhotoRepository(url)

    if (response instanceof AxiosError) {
        console.log("Ocorreu um error")
        return;
    }
    update(response)


    // addPhotos(response)
    // toggleLoad()
    return

}





