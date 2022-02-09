import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  align-self: center;
`;

const ProfileTitle = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
`;

const Row = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

const ImgWrapper = styled.div`
  padding: 0 0 1rem 3rem;
`;

const ProfileImg = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: ${(props) => props.theme.main};
`;

const InputWrapper = styled.div``;

const InputLabel = styled.span`
  display: inline-block;
  width: 7.5rem;
`;

const Input = styled.input`
  width: 20rem;
  padding: 0.7rem;
  margin: 0px 5px 40px 20px;
  border: 2px solid ${(props) => props.theme.main};
`;

const CheckBtn = styled.div`
  user-select: none;
  padding: 0.6rem;
  display: inline-block;
  background-color: white;
  border: 1px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};

  &:hover {
    background: ${(props) => props.theme.main};
    color: white;
  }
`;

const UploadImgBtn = styled.div`
  user-select: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.2rem;
  border: 1px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};

  &:hover {
    background: ${(props) => props.theme.main};
    color: white;
  }
`;

const CompleteBtn = styled.div`
  margin: 1rem;
  user-select: none;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};

  &:hover {
    background: ${(props) => props.theme.main};
    color: white;
  }
`;

function ProfilePresenter(props) {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileTitle>프로필</ProfileTitle>
        <Row>
          <InputWrapper>
            <InputLabel>닉네임</InputLabel>
            <Input />
            <CheckBtn>중복체크</CheckBtn>
            <div />
            <InputLabel>이메일</InputLabel>
            <Input />
            <div />
            <InputLabel>깃주소</InputLabel>
            <Input />
            <div />
            <InputLabel>블로그 / 웹사이트</InputLabel>
            <Input />
            <div />
            <InputLabel>SNS</InputLabel>
            <Input />
            <div />
            <InputLabel>자기소개</InputLabel>
            <Input />
          </InputWrapper>
          <ImgWrapper>
            <ProfileImg />
            <UploadImgBtn>이미지 등록</UploadImgBtn>
            <ProfileImg />
            <UploadImgBtn>경험치</UploadImgBtn>
          </ImgWrapper>
        </Row>
        <CompleteBtn>수정</CompleteBtn>
      </ProfileWrapper>
    </Wrapper>
  );
}

export default ProfilePresenter;
