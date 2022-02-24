import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAuth2RedirectHandler from "./oAuth2/OAuth2RedirectHandler";
import { MyPage } from "./screens/MyPage";
import { Home } from "./screens/Home";
import { Team } from "./screens/Team";
import { TIL } from "./screens/TIL";

import { Footer, Header } from "./screens/Base";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/til/*" element={<TIL />} />
        <Route path="/myPage/*" element={<MyPage />} />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
//
// const theme = {
//   main: "#1b1e65",
//   hover: "white",
// };
//
// const Wrapper = styled.div`
//   flex: 1;
//   height: auto;
//   min-height: 79.2vh;
// `;

/*
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/til/*" element={<TIL />} />
            <Route path="/myPage/*" element={<MyPage />} />
            <Route path="/support/*" element={<Support />} />
            <Route
              path="/oauth2/redirect"
              element={<OAuth2RedirectHandler />}
            />
          </Routes>
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};
*/

export default App;
