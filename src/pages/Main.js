import React, { useState } from "react";
import { getCurrentUser } from "../apis/api";
function Main() {
  const [user, setUser] = useState("로그인 전");
  const [imgURL, setImgURL] = useState("");

  function onClick() {
    const data = getCurrentUser();
    setUser(data.name);
    setImgURL(data.imageUrl);
  }

  return (
    <div>
      <div>{user}</div>
      {imgURL !== "" ? <img src={imgURL} alt={user} /> : null}
      <button onClick={onClick}>테스트 버튼</button>
    </div>
  );
}

export default Main;
