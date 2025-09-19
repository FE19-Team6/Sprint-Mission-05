import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 10000,
});

export default axiosApi;
