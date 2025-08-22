import axios from "axios";
const DEV_URL = import.meta.env.VITE_DEV_URL;

const axiosInstance = axios.create({
  baseURL: DEV_URL,
});

export { axiosInstance };
