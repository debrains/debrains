import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.main};
  align-items: center;
  padding: 0.3rem;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BorderedButton = styled.button`
  font-weight: 600;
  color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.main};
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    background: ${(props) => props.theme.main};
    color: white;
  }
`;

const LoginButton = styled(Link)`
  font-weight: 600;
  color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.main};
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;
  flex: auto;

  &:hover {
    background: ${(props) => props.theme.main};
    color: white;
  }
`;

const Logo = styled(Link)`
  color: ${(props) => props.theme.main};
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 2px;
`;

const ModalFade = keyframes`
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
`;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: ${ModalFade} 0.5s;
  overflow: hidden;
`;

const LoginHeader = styled.div`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;

  & > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    border: 0;
  }
`;

const LoginBody = styled.div`
  padding: 10px;

  & > div {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LoginFooter = styled.div`
  border-top: 1px solid rgb(222, 226, 230);
  padding: 7px 16px;
  text-align: right;
  & > button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
  }
`;

const CloseText = styled.div`
  color: ${(props) => props.theme.main}; ;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.main};
`;

function HeaderPresenter({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const login = () => {
    setIsLogined((pre) => !pre);
    changeModal();
  };
  const changeModal = () => {
    setIsModal((pre) => !pre);
  };
  return (
    <Wrapper>
      <Logo to="/">Debrains</Logo>
      <Spacer />
      {!isLogined ? (
        <BorderedButton onClick={changeModal}>로그인 / 회원가입</BorderedButton>
      ) : (
        <ProfileLink to="/myPage/profile">마이페이지</ProfileLink>
      )}
      {isModal ? (
        <ModalBackGround>
          <ModalBox>
            <LoginHeader>로그인</LoginHeader>
            <LoginBody>
              <div>
                <LoginButton to="/" onClick={login}>
                  구글
                </LoginButton>
              </div>
              <div>
                <LoginButton to="/" onClick={login}>
                  깃
                </LoginButton>
              </div>
            </LoginBody>
            <LoginFooter>
              <CloseText onClick={changeModal}>닫기</CloseText>
            </LoginFooter>
          </ModalBox>
        </ModalBackGround>
      ) : null}
    </Wrapper>
  );
}

export default HeaderPresenter;
