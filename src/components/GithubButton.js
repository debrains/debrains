import { Button } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GoogleButton({}) {
  const loginUri = `https://github.com/login/oauth/authorize?client_id=e8782ac7cf06187a3dc2&&redirect_uri=http://localhost:3000/callback`;

  return (
    <Button
      startIcon={<GitHubIcon />}
      color="github"
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 1 }}
    >
      Github로 계속하기
    </Button>
  );
}
