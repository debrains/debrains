import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;

const FeedWrapper = styled.div`
  align-self: center;
`;

const FeedTitle = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
`;

function FeedbackPresenter(props) {
  return (
    <Wrapper>
      <FeedWrapper>
        <FeedTitle>문의</FeedTitle>
      </FeedWrapper>
    </Wrapper>
  );
}

export default FeedbackPresenter;
