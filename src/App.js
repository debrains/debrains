import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import UploadProfile from "./pages/UploadProfile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, grey, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: blue[500],
    },
    github: {
      main: grey[900],
      contrastText: grey[200],
    },
    google: {
      main: grey[200],
      contrastText: grey[900],
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title="개발자의 뇌가 궁금해" />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "78vh" }}
      >
        <Routes>
          <Route path="/" exact element={<Main text="메인" />} />
          <Route path="/callback" element={<Main text="메인아님" />} />
          <Route
            path="/profile"
            element={<UploadProfile text="프로필화면임" />}
          />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
