import { atom } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

export const nickNameAtom = atom({
  key: "nickName",
  default: "asdasd",
});