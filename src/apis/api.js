import customAPI from "../apis/customAPI";

//User

export const getCurrentUser = async () => {
  const { data } = await customAPI.get("/user/info");
  console.log("유저 정보 :", data);
  return data;
};

export const patchUser = async ({
  id,
  email,
  name,
  description,
  img,
  githubUrl,
  blogUrl,
  snsUrl,
}) => {
  const { data } = await customAPI.patch("/user/info", {
    id: 1,
    email: "dev@dev.com",
    name: "dev",
    description: "I'm Developer",
    img: null,
    githubUrl: "http://github.com/devdev",
    blogUrl: "https://devdev.github.io/",
    snsUrl: "https://www.instagram.com/devdev",
  });
  console.log("유저 정보 수정 :", data);
  return data;
};

export const postDuplicateCheck = async ({ name }) => {
  const { data } = await customAPI.post("/user/validate", { name: name });
  console.log("중복검사 :", data);
  return data;
};

export const getProfile = async () => {
  const { data } = await customAPI.get("/user/profile");
  console.log("유저 정보 :", data);
  return data;
};

export const getUserBoard = async ({ id }) => {
  const { data } = await customAPI.patch(`/user/board/${id}`);
  console.log("유저 보드:", data);
  return data;
};

//TIL

export const getTILs = async ({ page }) => {
  const { data } = await customAPI.get(
    `/tils?page=${page}&size=10&sort=id%2CDESC`
  );
  console.log("TIL 목록:", data);
  return data;
};

export const postTILs = async ({
  userId,
  subject,
  description,
  startDate,
  endDate,
  cycleStatus,
  cycleCnt,
}) => {
  const { data } = await customAPI.post(`/tils/`, {
    userId: 1,
    subject: "TIL subject1 입니다.",
    description: "TIL description1 입니다",
    startDate: "2022-03-17",
    endDate: "2022-05-12",
    cycleStatus: "WEEK",
    cycleCnt: 4,
  });
  console.log("TIL 생성:", data);
  return data;
};

export const getTIL = async ({ id }) => {
  const { data } = await customAPI.get(`/tils/${id}`);
  console.log("TIL 상세:", data);
  return data;
};

export const patchTIL = async ({ id }) => {
  const { data } = await customAPI.patch(`/tils/${id}`);
  console.log("TIL 수정:", data);
  return data;
};

export const getTILCrts = async ({ page }) => {
  const { data } = await customAPI.get(
    `/til-crts/?page=${page}&size=10&sort=id%2CDESC`
  );
  console.log("TIL 인증 목록 :", data);
  return data;
};

export const postTILCrts = async ({
  tilId,
  description,
  startTime1,
  endTime1,
  startTime2,
  endTime2,
  startTime3,
  endTime3,
  watchTime,
  filePath,
}) => {
  const { data } = await customAPI.post(`/til-crts`, {
    id: null,
    tilId: 281,
    description: "인증 설명입니다.",
    startTime1: "2022-03-17 13:03:13",
    endTime1: "2022-03-17 17:03:13",
    startTime2: null,
    endTime2: null,
    startTime3: null,
    endTime3: null,
    watchTime: "05:00",
    userId: null,
    filePath: null,
  });
  console.log("TIL 인증 생성 :", data);
  return data;
};

export const getTILCrt = async ({ id }) => {
  const { data } = await customAPI.get(`/tils-crts/${id}`);
  console.log("TIL 인증 상세:", data);
  return data;
};

export const patchTILCrt = async ({ id }) => {
  const { data } = await customAPI.patch(`/tils/${id}`);
  console.log("IL 인증 수정:", data);
  return data;
};
