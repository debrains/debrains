import moment from "moment";
import { ACCESS_TOKEN } from "../contents";

let URL;

if (window.location.origin === "http://localhost:3000") {
  URL = "http://localhost:8080";
} else if (window.location.origin === "https://debrain.co.kr") {
  URL = "https://api.debrain.co.kr";
} else {
  URL = "http://3.39.86.48:8080";
}
URL += "/auth/refresh";

const refresh = async (config) => {
  let { accessToken, expireAT } = JSON.parse(
    localStorage.getItem("accessToken")
  );
  if (moment(expireAT).diff(moment()) < 0) {
    const newToken = await fetch(URL, {
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
