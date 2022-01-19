import { Button } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GITHUB_AUTH_URL } from "../contants";

export default function GithubButton() {
  return (
    <Button
      href={GITHUB_AUTH_URL}
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
