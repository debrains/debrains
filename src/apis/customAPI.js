import axios from "axios";
import { API_BASE_URL } from "../contants";
import { refresh } from "../oauth2/refresh";
const customAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  params: {},
});

customAPI.interceptors.request.use(refresh);

export default customAPI;
