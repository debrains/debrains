import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";
import { MyPage } from "./screens/MyPage";
import { Home } from "./screens/Home";
import { Header } from "./screens/Base";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
