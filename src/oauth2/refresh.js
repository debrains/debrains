import axios from "axios";
import Cookie from "js-cookie";
import { API_BASE_URL } from "../contants/index";
import moment from "moment";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";
const refresh = async (config) => {
  let { accessToken, expireAT } = JSON.parse(
    localStorage.getItem("accessToken")
  );

  if (moment(expireAT).diff(moment())) {
    OAuth2RedirectHandler();
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
};
const refreshErrorHandle = (err) => {
  Cookie.remove("refreshToken");
};
export { refresh, refreshErrorHandle };
