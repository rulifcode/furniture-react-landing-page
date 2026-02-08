import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lumoshive-api-furniture.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
