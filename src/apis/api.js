import customAPI from "../apis/customAPI";
export const getCurrentUser = async () => {
  const { data } = await customAPI.get("/user/me");
  console.log("api 요청결과 :", data);
  return data;
};

export const postDuplicateCheck = async () => {
  const { data } = await customAPI.post("/validateName", "debrains");
  console.log("중복검사 결과:", data);
  return data;
};
