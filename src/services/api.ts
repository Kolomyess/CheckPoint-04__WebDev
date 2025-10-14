import axios from "axios";

const API_KEY = "981168ce8d9dcd0d06f9602de23db87e";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default api;

