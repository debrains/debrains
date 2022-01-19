import Cookie from "js-cookie";
import moment from "moment";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";
const refresh = async (config) => {
  console.log("refresh 실행 테스트");
  let { accessToken, expireAT } = JSON.parse(
    localStorage.getItem("accessToken")
  );

  if (moment(expireAT).diff(moment())) {
    console.log("accessToken 만료 토큰 재발급 요청");
    OAuth2RedirectHandler();
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
};
const refreshErrorHandle = (err) => {
  Cookie.remove("refreshToken");
};
export { refresh, refreshErrorHandle };
