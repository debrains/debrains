import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth } from "./pages";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";

import HeaderContainer from "./containers/Base/HeaderContainer";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      </Routes>
    </div>
  );
};

export default App;
