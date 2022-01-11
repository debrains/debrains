import { useEffect } from "react";
import axios from "axios";
const Callback = ({ history, location }) => {
  const authUri = `/callback`;
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const code = urlParams.get("code");

  useEffect(() => {
    const getToken = async () => {
      let form = new FormData();
      form.append("client_id", "e8782ac7cf06187a3dc2");
      form.append("client_secret", "e0cf2957b5fa5bd23d4a7fa0d661b0911f353742");
      form.append("code", code);
      form.append("redirect_uri", `http://localhost:3000${authUri}`);
      try {
        const {
          data: { result },
          data,
        } = await axios.post(
          `https://github.com/login/oauth/access_token`,
          form
        );
        return [result || result, null];
      } catch (e) {
        return [null, e];
      }
    };

    getToken();
  }, []);

  return <div></div>;
};

export default Callback;
