import React from "react";
import GoogleLogin from "react-google-login";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
export default function GoogleButton() {
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
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            startIcon={<GoogleIcon />}
            color="google"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1 }}
          >
            Google로 계속하기
          </Button>
        )}
      />
      {/* <GoogleLogout
        clientId="787542044968-gbbje4dhnm902l42hfnvl3rjqokocs8q.apps.googleusercontent.com"
        buttonText="Logout"
      ></GoogleLogout> */}
    </div>
  );
}
