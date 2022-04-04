import moment from "moment";
import { ACCESS_TOKEN } from "../contents";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../atoms/atom";

const refresh = async (config) => {
  let { accessToken, expireAT } = JSON.parse(
    localStorage.getItem("accessToken")
  );

  if (moment(expireAT).diff(moment()) < 0) {
    console.log("accessToken 만료 토큰 재발급 요청");
    const newToken = await fetch("http://localhost:8080/auth/refresh", {
      method: "POST",
      body: accessToken,
      credentials: "include",
    });

    await newToken.text().then(function (tokenText) {
      const object = {
        accessToken: tokenText,
        expireAT: moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss"),
      };
      if (tokenText) {
        localStorage.setItem(ACCESS_TOKEN, JSON.stringify(object));
      }
    });
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
};
export { refresh };
