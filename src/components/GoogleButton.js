import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { GOOGLE_AUTH_URL } from "../contants";

export default function GoogleButton() {
  return (
    <Button
      href={GOOGLE_AUTH_URL}
      startIcon={<GoogleIcon />}
      color="google"
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 1 }}
    >
      Google로 계속하기
    </Button>
  );
}
