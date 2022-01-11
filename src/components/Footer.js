import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="left">
        {"Github :"}
        <Link color="inherit" href="https://mui.com/">
          주소
        </Link>{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="left">
        {"Blog :"}
        <Link color="inherit" href="https://mui.com/">
          주소
        </Link>{" "}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="left">
        {"Instagram :"}
        <Link color="inherit" href="https://www.instagram.com/debrain.team/">
          debrain.team
        </Link>{" "}
      </Typography>
    </>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
