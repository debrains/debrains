import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="left">
        {"Instagram :"}
        <Link color="inherit" href="https://www.instagram.com/debrain.team/">
          debrain.team
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="left">
        {"Blog : "}
        <Link color="inherit" href="https://blog.debrain.co.kr/">
          데브레인
        </Link>
      </Typography>
    </>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "footer", py: 1 }}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
