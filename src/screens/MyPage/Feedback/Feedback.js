import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { FeedbackHome } from "./FeedbackHome";
import { FeedbackDetail } from "./FeedbackDetail";

const Wrapper = styled.div`
  height: auto;
  min-height: 79.2vh;
  display: flex;
`;

function Feedback(props) {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" exact element={<FeedbackHome />} />
        <Route path="/:id" exact element={<FeedbackDetail />} />
      </Routes>
    </Wrapper>
  );
}

export default Feedback;
