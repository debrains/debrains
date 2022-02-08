import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;
const ProfileTitle = styled.div`
  padding: 1rem;
  font-size: 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgWrapper = styled.div`
  padding: 1rem;
`;

const ProfileImg = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: ${(props) => props.theme.main};
`;

const InputWrapper = styled.div`
  padding: 1rem;
`;

const InputLabel = styled.span`
  display: inline-block;
  width: 7.5rem;
`;

const Input = styled.input`
  width: 15rem;
  padding: 0.7rem;
  margin: 5px;
  border: 2px solid ${(props) => props.theme.main};
`;

const CheckButton = styled.button`
  background-color: white;
  border: 1px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};

  &:hover {
    background: ${(props) => props.theme.main};
    color: white;
  }
`;

const UploadImgBtn = styled.div`
  margin-top: 0.5rem;
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
  margin-top: 2rem;
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
    <ProfileWrapper>
      <ProfileTitle>프로필</ProfileTitle>
      <Row>
        <InputWrapper>
          <InputLabel>닉네임</InputLabel>
          <Input />
          <CheckButton>중복체크</CheckButton>
          <div />
          <InputLabel>이메일</InputLabel>
          <Input />
          <div />
          <InputLabel>깃</InputLabel>
          <Input />
          <div />
          <InputLabel>블로그 / 웹사이트</InputLabel>
          <Input />
          <div />
          <InputLabel>SNS</InputLabel>
          <Input />
          <CompleteBtn>수정</CompleteBtn>
        </InputWrapper>
        <ImgWrapper>
          <ProfileImg />
          <UploadImgBtn>이미지 등록</UploadImgBtn>
        </ImgWrapper>
      </Row>
    </ProfileWrapper>
  );
}

export default ProfilePresenter;
