import { atom, selector } from "recoil";
import { getCurrentUser } from "../apis/api";

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

export const nickNameAtom = atom({
  key: "nickName",
  default: "asdasd",
});

export const profileAtom = atom({
  key: "profile",
  default: "",
});
