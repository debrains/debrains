import React, { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAuth2RedirectHandler from "./oAuth2/OAuth2RedirectHandler";
import { MyPage } from "./screens/MyPage";
import { Home } from "./screens/Home";
// import { Team } from "./screens/Team";
import { TIL } from "./screens/TIL";
import { Login } from "./screens/Login";

import { Footer, Header } from "./screens/Base";
import "./index.css";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "./atoms/atom";
import moment from "moment";
import ErrorPresenter from "./screens/Base/ErrorPresenter";

const App = () => {
  const [isLogin,setIsLogin] = useState();
  
  useEffect(() => {
    if (localStorage.length !== 0) {
      let { expireAT } = JSON.parse(localStorage.getItem("accessToken"));
      if (moment(expireAT).diff(moment()) < 0) {
        setIsLogin(false);
      }else{
        setIsLogin(true);
      }
    } else {
      setIsLogin(false);
    }
  }, [])
  
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/til/*" element={isLogin ? <TIL /> : <Login />} />
          <Route path="/mypage/*" element={isLogin ? <MyPage /> : <Login />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          <Route path="*" exact element={<ErrorPresenter />} /> {/* 404로 수정필요 */}
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
