import axios from "axios";
import Cookie from "js-cookie";
import { API_BASE_URL } from "../contants/index";
import moment from "moment";
const refresh = async (config) => {
  const refreshToken = Cookie.get("refreshToken");
  let { accessToken, expireAT } = JSON.parse(
    localStorage.getItem("accessToken")
  );

  if (moment(expireAT).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };
    // 토큰 갱신 서버통신
    const { data } = await axios.post(`${API_BASE_URL}/auth/token`, body);
    accessToken = data.data.accessToken;
    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem(
      "expiresAt",
      moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
    );
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
};
const refreshErrorHandle = (err) => {
  Cookie.remove("refreshToken");
};
export { refresh, refreshErrorHandle };
