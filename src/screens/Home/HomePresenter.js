import React from "react";
import styled from "styled-components";

const Introduction = styled.div`
  font-size: 2rem;
  letter-spacing: 2px;
`;

const IntroWrapper = styled.div`
  padding: 1rem;
`;

function HomePresenter(props) {
  return (
    <IntroWrapper>
      <Introduction>차곡차곡 쌓이는</Introduction>
      <Introduction>나의 성장 기록</Introduction>
    </IntroWrapper>
  );
}

export default HomePresenter;
