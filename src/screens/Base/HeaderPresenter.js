import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid violet;
  align-items: center;
  padding: 0.3rem;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BorderedButton = styled(Link)`
  font-weight: 600;
  color: violet;
  border: 1px solid violet;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    background: violet;
    color: white;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  letter-spacing: 2px;
`;

function HeaderPresenter({ children }) {
  return (
    <Wrapper>
      <Logo>Debrains</Logo>
      <Spacer />
      <BorderedButton to="/myPage">로그인 / 회원가입</BorderedButton>
    </Wrapper>
  );
}

export default HeaderPresenter;
