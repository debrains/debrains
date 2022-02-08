import React from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";
import { UserBoard } from "./UserBoard";
import styled from "styled-components";
import { Feedback } from "./Feedback";
import { SideBar } from "./Base";

const Wrapper = styled.div`
  width: auto;
  height: auto;
  min-height: 79.2vh;
  display: flex;
  flex-direction: row;
`;

function MyPagePresenter(props) {
  return (
    <Wrapper>
      <SideBar />
      <Routes>
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/userBoard" element={<UserBoard />} />
        <Route path="/feedbacks" element={<Feedback />} />
      </Routes>
    </Wrapper>
  );
}

export default MyPagePresenter;
