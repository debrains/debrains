import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import Header from "../components/Header";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: blue[100],
    },
    github: {
      main: grey[900],
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Header title="개발자의 뇌가 궁금해" />
      <Footer />
    </ThemeProvider>
  );
}
