import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useRecoilValue } from "recoil";
import { nickNameAtom } from "../../../atoms/atom";

function ProfileContainer(props) {
  return <ProfilePresenter />;
}

export default ProfileContainer;
