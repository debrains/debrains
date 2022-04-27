let origin = window.location.origin;

// 운영서버
let API_BASE_URL = "https://api.debrain.co.kr";
let LOGIN_URL = API_BASE_URL;

// 개발서버
if (origin === "http://localhost:3000") {
  API_BASE_URL = "http://localhost:8080";
  LOGIN_URL = API_BASE_URL;
}
// 스테이징 서버
else if (origin === "http://3.39.86.48") {
  API_BASE_URL = "http://3.39.86.48:8080";
}

export { API_BASE_URL };
export const ACCESS_TOKEN = "accessToken";

/*
<API server>
개발서버 : http://localhost:3000 
스테이징서버 : http://3.39.86.48 
운영서버 : https://api.debrain.co.kr

<구글로그인>
개발서버 : http://localhost:8080/oauth2/authorization/google"?redirect_uri=http://localhost:3000/oauth2/redirect 
스테이징서버 : https://api.debrain.co.kr/oauth2/authorization/google"?redirect_uri=http://3.39.86.48/oauth2/redirect
운영서버 : https://api.debrain.co.kr/oauth2/authorization/google"?redirect_uri=https://api.debrain.co.kr/oauth2/redirect

<깃허브로그인>
모든서버 베이스 : https://api.debrain.co.kr
*/

const AUTH_URL = "?redirect_uri=" + origin + "/oauth2/redirect";
export const GOOGLE_AUTH_URL =
  LOGIN_URL + "/oauth2/authorization/google" + AUTH_URL;
export const GITHUB_AUTH_URL =
  "https://api.debrain.co.kr/oauth2/authorization/github" + AUTH_URL;
