import React, { useState } from "react";
import { getCurrentUser } from "../apis/api";
function Main() {
  const [user, setUser] = useState("로그인 전");

  function onClick() {
    const data = getCurrentUser();
    setUser(data);
  }

  return (
    <div>
      <div>{user}</div>
      <button onClick={onClick}>테스트 버튼</button>
    </div>
  );
}

export default Main;
