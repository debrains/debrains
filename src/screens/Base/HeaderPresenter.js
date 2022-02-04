import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid violet;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Button = styled.button``;

const Logo = styled.div`
  font-size: 2rem;
  letter-spacing: 2px;
`;

function HeaderPresenter({ children }) {
  return (
    <Wrapper>
      <Logo>Debrains</Logo>
      <Spacer />
      <div>가운데</div>
      <Spacer />
      <div>가운데</div>
      <Spacer />
      <Button>로그인</Button>
    </Wrapper>
  );
}

export default HeaderPresenter;
