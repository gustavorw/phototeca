import axios from "axios";


const client = axios.create({
    baseURL: "",
    headers: {
        Authorization: ""
    }
})


const get = async () => {
    try {
      const response =  await client.get("")
      return ""
    } catch (error) {
        
    }
}




