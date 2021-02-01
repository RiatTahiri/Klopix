import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:4000/user/",
});

export const videoApi = axios.create({
  baseURL: "http://localhost:4000/video/",
});

export const indexApi = axios.create({
  baseURL: "http://localhost:4000/",
});
