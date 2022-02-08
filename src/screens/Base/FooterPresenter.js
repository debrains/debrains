import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.main};
  height: 10vh;
`;

function FooterPresenter(props) {
  return <Wrapper>푸터</Wrapper>;
}

export default FooterPresenter;
