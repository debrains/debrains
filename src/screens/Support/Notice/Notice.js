import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { NoticeDetail } from "./NoticeDetail";
import { NoticeHome } from "./NoticeHome";

const Wrapper = styled.div`
  height: auto;
  min-height: 79.2vh;
  display: flex;
`;

function Notice(props) {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" exact element={<NoticeHome />} />
        <Route path="/:id" exact element={<NoticeDetail />} />
      </Routes>
    </Wrapper>
  );
}

export default Notice;
