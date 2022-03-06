import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { DetailHome } from "./DetailHome";
import { Certification } from "./Certification";

function Detail(props) {
  return (
    <Routes>
      <Route path="/" exact element={<DetailHome />} />
      <Route path="/certification" exact element={<Certification />} />
    </Routes>
  );
}

export default Detail;
