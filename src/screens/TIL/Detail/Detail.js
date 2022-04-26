import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailHome } from "./DetailHome";
import { Certification } from "./Certification";
import { CrtDetail } from "./CrtDetail";

function Detail(props) {
  return (
    <Routes>
      <Route path="/" exact element={<DetailHome />} />
      <Route path="/certification" exact element={<Certification />} />
      <Route path="/:crtid/*" exact element={<CrtDetail />} />
    </Routes>
  );
}

export default Detail;
