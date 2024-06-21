import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: "NMmdRxRwjOgncJvyq2KpaFGPnmSZ2RuYyaJ8IczFMYlgtx9hRHWZEYQN",
  },
});
