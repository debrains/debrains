import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

export default function GoogleButton({}) {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId="787542044968-gbbje4dhnm902l42hfnvl3rjqokocs8q.apps.googleusercontent.com"
        buttonText="Gmail로 계속하기"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      {/* <GoogleLogout
        clientId="787542044968-gbbje4dhnm902l42hfnvl3rjqokocs8q.apps.googleusercontent.com"
        buttonText="Logout"
      ></GoogleLogout> */}
    </div>
  );
}
