import React from "react";
import { ACCESS_TOKEN } from "../contents";
import { Navigate, useLocation } from "react-router-dom";
import moment from "moment";

function OAuth2RedirectHandler(props) {
  const location = useLocation();
  console.log(location.search);

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    const results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("accessToken");
  const error = getUrlParameter("error");
  const object = {
    accessToken: token,
    expireAT: moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss"),
  };

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(object));
    return (
      <Navigate
        to={{
          pathname: "/mypage",
          state: { from: props.location },
        }}
      />
    );
  } else {
    return (
      <Navigate
        to={{
          pathname: "/",
          state: {
            from: props.location,
            error: error,
          },
        }}
      />
    );
  }
}

export default OAuth2RedirectHandler;
