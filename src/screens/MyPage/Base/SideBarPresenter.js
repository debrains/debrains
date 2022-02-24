import React from "react";

function SideBarPresenter(props) {
  return (
    <div>
        <a href="/myPage/profile">프로필</a>
        <a href="/myPage/userBoard">관심사</a>
        <a href="/myPage/feedbacks">문의</a>
    </div>
  );
}

export default SideBarPresenter;
