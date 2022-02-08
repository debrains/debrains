import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBar = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.main};
`;

const SideTitle = styled.div`
  margin: 1rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.hover};
`;

const SideItem = styled(Link)`
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.hover};
`;

const SideItemWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

function SideBarPresenter(props) {
  return (
    <SideBar>
      <SideTitle>마이페이지</SideTitle>
      <SideItemWrapper>
        <SideItem to="/myPage/profile">프로필</SideItem>
        <SideItem to="/myPage/userBoard">관심사</SideItem>
        <SideItem to="/myPage/feedbacks">Q&A</SideItem>
      </SideItemWrapper>
    </SideBar>
  );
}

export default SideBarPresenter;
