import { AxiosError } from "axios";
import { client } from "../core/client/client";
import { Photo } from "../models/photo";


type ResponsePhoto = {
    page: number,
    per_page: number,
    photos: Photo[],
    total_results: number,
    next_page: string
}



export async function fetchPhotoRepository(url: string): Promise<Photo[] | AxiosError> {
    try {

        const { data } = await client.get<ResponsePhoto>(url);

        const photos = data.photos;

        return photos;


    } catch (err: AxiosError | any) {

        console.error(err.message)
        throw err;

    }


}