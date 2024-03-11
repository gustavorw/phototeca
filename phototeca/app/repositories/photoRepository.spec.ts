import { Photo } from "../models/photo"
import { fetchPhotoRepository } from "./photo_repository"
import axios from "axios";


//jest.mock("axios");
describe('PhotoRepository - ', () => {



    it.skip('buscar fotos', async () => {

        const photos = await fetchPhotoRepository('curated')

        expect(photos).toBeInstanceOf(Array<Photo>)

    })
})