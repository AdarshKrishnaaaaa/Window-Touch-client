import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env,
  withCredentials: true,
});

export default api;