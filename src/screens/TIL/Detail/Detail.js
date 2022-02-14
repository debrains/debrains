import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { DetailHome } from "./DetailHome";
import { Certification } from "./Certification";

const Wrapper = styled.div`
  height: auto;
  min-height: 79.2vh;
  display: flex;
`;

function MyPagePresenter(props) {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" exact element={<DetailHome />} />
        <Route path="/certification" exact element={<Certification />} />
      </Routes>
    </Wrapper>
  );
}

export default MyPagePresenter;
