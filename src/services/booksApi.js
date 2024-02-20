import axios from "axios"

export const bookApi = axios.create({
  baseURL: "https://www.googleapis.com",
  timeout: 5000,
})
