import moment from "moment";
import { ACCESS_TOKEN, API_BASE_URL } from "../contants";

const refresh = async (config) => {
  console.log("refresh 실행 테스트");
  let { accessToken, expireAT } = JSON.parse(
    localStorage.getItem("accessToken")
  );

  if (moment(expireAT).diff(moment()) > 9) {
    console.log("accessToken 만료 토큰 재발급 요청");
    const newToken = await fetch("http://localhost:8080/auth/refresh", {
      method: "POST",
      body: accessToken,
      credentials: "include",
    });
    const object = {
      accessToken: newToken,
      expireAT: moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss"),
    };
    newToken.text().then(function (text) {
      console.log("text: ", text);
    });
    if (newToken) {
      localStorage.setItem(ACCESS_TOKEN, JSON.stringify(object));
    }
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
};
export { refresh };
