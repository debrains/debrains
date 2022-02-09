import React from "react";
import styled from "styled-components";

const UserBoardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;

const UserBoardTitle = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  padding: 0.3rem;
`;

const Label = styled.div``;

const Box = styled.div`
  display: inline-block;
  border: 2px solid ${(props) => props.theme.main};
  width: 4rem;
  text-align: center;
  padding: 0.6rem;
  margin: 1rem;
  border-radius: 50px;
`;

function UserBoardPresenter(props) {
  return (
    <UserBoardWrapper>
      <UserBoardTitle>관심사</UserBoardTitle>
      <Wrapper>
        <Label>지금 무엇을 준비 중인가요?</Label>
        <Box>취업</Box>
        <Box>이직</Box>
        <Box>창업</Box>
      </Wrapper>
      <Wrapper>
        <Label>백엔드</Label>
        <Box>Laravel</Box>
        <Box>Django</Box>
        <Box>Flask</Box>
        <Box>ExpressJS</Box>
        <Box>Spring</Box>
        <Box>Nest.js</Box>
      </Wrapper>
      <Wrapper>
        <Label>프론트엔드</Label>
        <Box>React.JS</Box>
        <Box>Vue.js</Box>
        <Box>Next.JS</Box>
        <Box>Nuxt.js</Box>
        <Box>Svelte</Box>
      </Wrapper>
    </UserBoardWrapper>
  );
}

export default UserBoardPresenter;
