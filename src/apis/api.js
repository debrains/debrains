import customAPI from "../apis/customAPI";
export const getCurrentUser = async () => {
  const { data } = await customAPI.get("/user/info");
  console.log("api 요청결과 :", data);
  return data;
};

export const postDuplicateCheck = async () => {
  const { data } = await customAPI.post("/user/validate", { name: "test" });
  console.log("중복검사 결과:", data);
  return data;
};
