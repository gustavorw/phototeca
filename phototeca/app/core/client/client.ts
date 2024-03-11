import axios from "axios";
import { BASE_URL, API_KEY } from "../constants/env";

export const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: API_KEY
    }
})


