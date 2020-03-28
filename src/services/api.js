import axios from "axios";

const api = axios.create({
  baseURL: "https://sejaoheroibackend.herokuapp.com"
});

export default api;
