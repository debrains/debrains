import axios from "axios";
import { API_BASE_URL } from "../contents";
import { refresh } from "../oAuth2/refresh";
const customAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  params: {},
});

customAPI.interceptors.request.use(refresh);

export default customAPI;
