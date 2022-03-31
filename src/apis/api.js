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
  const formData = new FormData();
  formData.append("id", id);
  formData.append("email", email);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("img", img);
  formData.append("githubUrl", githubUrl);
  formData.append("blogUrl", blogUrl);
  formData.append("snsUrl", snsUrl);
  const { data } = await customAPI.patch(
    "/user/info?_csrf=5c6ae09c-6750-4523-957e-a56e5ddc89ff",
    formData
  );
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
  const { data } = await customAPI.get(`tils/?size=10&page=0`);
  console.log("TIL 목록 불러오기", data);
  return data;
};

export const getTILCurrent = async () => {
  const { data } = await customAPI.get(`tils/current`);
  console.log("TIL 현황", data);
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
  await customAPI
    .post(`/tils/`, {
      subject: subject,
      description: description,
      startDate: startDate,
      endDate: endDate,
      cycleStatus: cycleStatus,
      cycleCnt: cycleCnt,
    })
    .then(function (response) {
      // 성공 핸들링
      console.log("성공", response);
      return response;
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log("실패", error);
    });
};

export const getTIL = async (id) => {
  console.log(`/til/${id}`);
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
