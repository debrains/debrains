console.log(window.location.origin);
let URL;
let redirect;

if (window.location.origin === "http://localhost:3000") {
  URL = "http://localhost:8080";
} else if (window.location.origin === "https://debrain.co.kr") {
  URL = "https://api.debrain.co.kr";
} else {
  URL = "http://3.39.86.48:8080";
}
export const API_BASE_URL = URL;
export const ACCESS_TOKEN = "accessToken";

if (window.location.origin === "http://localhost:3000") {
  redirect = "http://localhost:3000/oauth2/redirect";
} else if (window.location.origin === "https://debrain.co.kr") {
  redirect = "https://debrain.co.kr/oauth2/redirect";
} else {
  redirect = "http://3.39.86.48/oauth2/redirect";
}

export const OAUTH2_REDIRECT_URI = redirect;

export const GOOGLE_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorization/google?redirect_uri=" +
  OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorization/github?redirect_uri=" +
  OAUTH2_REDIRECT_URI;
