import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { EventDetail } from "./EventDetail";
import { EventHome } from "./EventHome";

const Wrapper = styled.div`
  height: auto;
  min-height: 79.2vh;
  display: flex;
`;

function Event(props) {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" exact element={<EventHome />} />
        <Route path="/:id" exact element={<EventDetail />} />
      </Routes>
    </Wrapper>
  );
}

export default Event;
