import axios from "axios";

export const MakeRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
})